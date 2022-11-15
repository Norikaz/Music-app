import React, { useState, useEffect } from "react";
import { SongInfo } from "../components/SongInfo";
import { SearchBar } from "../components/SearchBar";
import axios from "axios";

//this will be the song page that will display information about each song
//https://www.figma.com/file/0BuMDTJLOjiYCjR997Lrif/muschart?node-id=34%3A230
export const SongPage = (props) => {
  const [apiData, setApiData] = useState(null);
  const [artistInfo, setArtistInfo] = useState(null);

  //get artist information by artist id
  useEffect(() => {
    if (apiData) {
      axios(`https://api.spotify.com/v1/artists/${apiData.artists[0].id}`, {
        headers: {
          Authorization: "Bearer " + props.token,
        },
        method: "GET",
      }).then((response) => {
        setArtistInfo(response.data);
      });
    }
  }, [apiData]);

  return (
    <div className="text-center mt-12">
      <SearchBar
        parent={"SearchSongPage"}
        setApiData={setApiData}
        token={props.token}
      />
      <div className="bg-gray-500 mx-auto my-6 rounded-xl max-w-[95%] w-30">
        {/* {apiData &&
          apiData.map((data) => (
            <SongInfo
              songName={data.name}
              albumName={data.album.name}
              releaseDate={data.album.release_date}
              albumCover={data.album.images[1].url}
              artistName={artist.name}
              artistImage={data.images[2].url}
              genre={data.genre}
            />
          ))} */}

        <SongInfo
          songName={apiData ? apiData.name : "N/A"}
          albumName={apiData ? apiData.album.name : "N/A"}
          releaseDate={apiData ? apiData.album.release_date : "N/A"}
          albumCover={apiData ? `${apiData.album.images[1].url}` : ""}
          artistName={
            apiData
              ? apiData.artists.map((artist) => <p>{artist.name}</p>)
              : "N/A"
          }
          artistImage={artistInfo ? artistInfo.images[2].url : ""}
          genres={
            artistInfo
              ? artistInfo.genres.map((genre) => <p>{genre}</p>)
              : "N/A"
          }
        />
      </div>
    </div>
  );
};
