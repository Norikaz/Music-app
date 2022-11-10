import React, { useState, useEffect } from "react";
import { SongInfo } from "../components/SongInfo";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const SongPage = (props) => {
  const [token, setToken] = useState("");
  const [songName, setSongName] = useState("");
  const [spotifySongInfo, setSpotifySongInfo] = useState(null);
  const [spotifyArtistInfo, setSpotifyArtistInfo] = useState(null);

  //get spotify token
  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((response) => {
      setToken(response.data.access_token);
    });
  }, [CLIENT_ID, CLIENT_SECRET]);

  //get song through spotify search
  useEffect(() => {
    axios(`https://api.spotify.com/v1/search?q=track:${songName}&type=track`, {
      headers: {
        Authorization: "Bearer " + token,
      },
      method: "GET",
    }).then((response) => {
      setSpotifySongInfo(response.data.tracks.items[0]);
    });
  }, [songName]);

  //get artist information by artist id provided by spotifySongInfo
  useEffect(() => {
    if (spotifySongInfo) {
      axios(
        `https://api.spotify.com/v1/artists/${spotifySongInfo.artists[0].id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
          method: "GET",
        }
      ).then((response) => {
        setSpotifyArtistInfo(response.data);
      });
    }
  }, [spotifySongInfo]);

  console.log("SONG INFO");
  console.log(spotifySongInfo);
  console.log("ARTIST INFO");
  console.log(spotifyArtistInfo);

  return (
    <div className="text-center mt-12">
      <h1 className="text-4xl font-bold mb-6">Find Your Next Favorite Song!</h1>
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-black"
        type="text"
        id="song_name"
        placeholder="Song Name"
        onChange={(e) => setSongName(e.target.value)}
        required
      />

      <div className="bg-gray-500 mx-auto my-6 rounded-xl max-w-[95%] w-30">
        <SongInfo
          songName={spotifySongInfo ? spotifySongInfo.name : "N/A"}
          albumName={spotifySongInfo ? spotifySongInfo.album.name : "N/A"}
          releaseDate={
            spotifySongInfo ? spotifySongInfo.album.release_date : "N/A"
          }
          albumCover={
            spotifySongInfo ? `${spotifySongInfo.album.images[1].url}` : ""
          }
          artistName={
            spotifySongInfo
              ? spotifySongInfo.artists.map((artist) => <p>{artist.name}</p>)
              : "N/A"
          }
          artistImage={spotifyArtistInfo ? spotifyArtistInfo.images[2].url : ""}
          genres={
            spotifyArtistInfo
              ? spotifyArtistInfo.genres.map((genre) => <p>{genre}</p>)
              : "N/A"
          }
        />
      </div>
    </div>
  );
};
