import React, { useState, useEffect, useContext } from "react";
import { SongInfo } from "../components/SongInfo";
import { SearchBar } from "../components/SearchBar";
import { TokenContext } from "../components/context/TokenContext";
import { SongInfoContext } from "../components/context/SongInfoContext";
import useAxiosFetchSpotify from "../components/hooks/useAxiosFetchSpotify";

//this will be the song page that will display information about each song
//https://www.figma.com/file/0BuMDTJLOjiYCjR997Lrif/muschart?node-id=34%3A230
export const SongPage = (props) => {
  const [artistInfo, setArtistInfo] = useState(null);

  const token = useContext(TokenContext);
  const { songInfo, setSongInfo } = useContext(SongInfoContext);

  //get artist information by artist id provided by songInfo
  const { isLoading, isError, data } = useAxiosFetchSpotify(
    () => {
      if (songInfo)
        return `https://api.spotify.com/v1/artists/${songInfo.artists[0].id}`;
    },
    token,
    [songInfo]
  );

  console.log("isLoading: " + isLoading);
  console.log("isError: " + isError);

  useEffect(() => {
    setArtistInfo(data);
  }, [data]);

  return (
    <div className="text-center mt-12">
      <SearchBar />
      <div>
        <SongInfo
          songName={songInfo ? songInfo.name : "N/A"}
          albumName={songInfo ? songInfo.album.name : "N/A"}
          releaseDate={songInfo ? songInfo.album.release_date : "N/A"}
          popularity={songInfo ? songInfo.popularity : "N/A"}
          albumCover={
            songInfo
              ? `${songInfo.album.images[1].url}`
              : "https://via.placeholder.com/150?text=No+Image"
          }
          artistName={
            songInfo
              ? songInfo.artists.map((artist) => <p>{artist.name}</p>)
              : ["N/A"]
          }
          artistImage={
            artistInfo
              ? artistInfo.images[2].url
              : "https://via.placeholder.com/150?text=No+Image"
          }
          genres={
            artistInfo
              ? artistInfo.genres.map(
                  (genre, i) =>
                    genre.charAt(0).toUpperCase() +
                    genre.slice(1) +
                    (i + 1 === artistInfo.genres.length ? "." : ", ")
                )
              : "N/A"
          }
          id={
            songInfo
              ? "https://open.spotify.com/embed/track/" + songInfo.id
              : ""
          }
        />
      </div>
    </div>
  );
};
