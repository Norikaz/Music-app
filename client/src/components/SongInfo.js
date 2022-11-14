import React from "react";
import { Card } from "./UI/Card";

//displays the song information on SearchSongPage
export const SongInfo = (props) => {
  return (
      <div className="bg-gray-100 mx-auto my-6 rounded-xl max-w-[95%] w-30 p-16 font-inter">
          <h1 className="font-semibold text-4xl outline-dotted text-left">
              {props.songName}
          </h1>

          <img
              src={props.albumCover}
              alt="album cover"
              width="411"
              height="auto"
              className="align-center mt-8 mb-8 mr-8 rounded-xl"
          />

          <div className="bg-gray-200 pr-8 mb-8 mr-8 outline-5 inline-flex rounded-xl items-center">
              <img
                  src={props.artistImage}
                  alt="artist image"
                  width="125"
                  className="rounded-xl mr-4 aspect-square"
              />

              <div className="text-left my-4 text-l">
                  <span className="font-semibold text-2xl">
                      {props.artistName[0]}
                  </span>
                  {props.artistName.slice(1)}
              </div>
          </div>

          <div className="bg-gray-200 pr-8 mb-8 outline-5 inline-flex rounded-xl items-center max-w-md">
              <img
                  src={props.albumCover}
                  alt="album cover"
                  width="125"
                  className="rounded-xl mr-4 aspect-square"
              />

              <div className="text-left outline-dotted my-4 text-l">
                  <span className="font-semibold text-2xl">
                      {props.albumName}
                  </span>
                  <p className="outline-dotted">{props.releaseDate}</p>
              </div>
          </div>

          <p className="outline-dotted">Genres: {props.genres}</p>
          <img src={props.artistImage} alt="artist image" />
          <p>Artist(s): {props.artistName}</p>
          <p>Genres: {props.genres}</p>
          <iframe src={props.id} width="20%" height="152"></iframe>
      </div>
  );
};
