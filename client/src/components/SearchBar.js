import React, { Fragment, useState, useEffect } from "react";
import { LoadingSpinner } from "./UI/LoadingSpinner";
import axios from "axios";

export const SearchBar = (props) => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [songInput, setSongInput] = useState("");
    // stores 20 results from the API, will use this in the search results page later
    const [searchResponse, setSearchResponse] = useState(null);
    //const [spotifyArtistInfo, setSpotifyArtistInfo] = useState(null);

    //get song through spotify search, default is 20 results
    //can set custom limit by appending &limit=n to end of query
    const fetchSong = () => {
        setIsLoading(true);
        axios(
            `https://api.spotify.com/v1/search?q=track:${songInput}&type=track`,
            {
                headers: {
                    Authorization: "Bearer " + props.token,
                },
                method: "GET",
            }
        )
            .then((response) => {
                setSearchResponse(response.data.tracks.items);
                //sends the first song from response to SearchSongPage
                //temporary until we have the search results page
                if (props.parent === "SearchSongPage") {
                    props.setSongInfo(response.data.tracks.items[0]);
                }
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
                console.log(error.message);
            });
    };

    console.log("SONG INFO");
    console.log(searchResponse);
    /*
    //get artist information by artist id provided by searchResponse
    useEffect(() => {
        if (searchResponse) {
            axios(`https://api.spotify.com/v1/artists/${"query"}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
                method: "GET",
            }).then((response) => {
                setSpotifyArtistInfo(response);
            });
        }
    }, []);
    */

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (songInput.trim().length === 0) {
            return;
        }

        fetchSong();
    };

    return (
        <Fragment>
            <form onSubmit={onSubmitHandler} className="text-center mt-12">
                <input
                    className="mt-6 p-2 bg-slate-500 rounded"
                    type="text"
                    placeholder="Enter Artist, Album, Genre..."
                    id="search-song"
                    value={songInput}
                    onChange={(event) => setSongInput(event.target.value)}
                />
            </form>
            {isLoading && <LoadingSpinner />}
        </Fragment>
    );
};
