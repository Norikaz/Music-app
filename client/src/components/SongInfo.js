import React from "react";
import { Card } from "./UI/Card";

//displays the song information on SearchSongPage
export const SongInfo = (props) => {
  return (
      <div className="">
          <img
              src={props.albumCover}
              alt="album cover"
              className="align-center"
          />
          <img src={props.artistImage} alt="artist image" />
          <h1>{props.songName}</h1>
          <h2>Album: {props.albumName}</h2>
          <p>Release date: {props.releaseDate}</p>
          <p>Artist(s): {props.artistName}</p>
          <p>Genres: {props.genres}</p>
      </div>
  );
};
