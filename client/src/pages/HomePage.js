import axios from "axios";
import React, { useState, useEffect } from "react";
import { SearchBar } from "../components/SearchBar";
import { Top10List } from "../components/Top10List";
//this is the landing page of the website
//https://www.figma.com/file/0BuMDTJLOjiYCjR997Lrif/muschart?node-id=0%3A1




export const HomePage = (props) => {

    const [playlistInfo, setPlaylistInfo] = useState("")
        
    useEffect(() => {
        if(playlistInfo === "" && props.token){
        //Grabs Todays Top Hits playlist from spotify  
        axios(
            `https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M`,
            {
                headers: {
                    Authorization: "Bearer " + props.token,
                },
                method: "GET",
            }
        ).then(res => {
            setPlaylistInfo(res.data.tracks)
        })
        .catch(console.log("error"))
    }
    },[playlistInfo])
    console.log(playlistInfo)
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6 my-6 text-center">
                Find Your Next Favorite Song!
            </h1>
            <Top10List />
        </div>
    );
};
