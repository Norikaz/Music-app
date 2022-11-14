import React from "react";
import { Card } from "./UI/Card";

//displays the song information on SearchSongPage
export const SongInfo = (props) => {
  return (
      <div className="bg-gray-100 mx-auto my-6 rounded-xl max-w-[95%] w-30 p-16 font-inter ">
          <h1 className="font-semibold text-4xl text-left">{props.songName}</h1>
          <div className="flex flex-col lg:flex-row justify-start">
              {/* main cover image */}
              <img
                  src={props.albumCover}
                  alt="album cover"
                  width="411"
                  height="auto"
                  className="align-center mt-8 mr-8 rounded-xl"
              />

              <div className="inline-flex flex-col xl:flex-row items-center mt-8 w-max ">
                  {/* displays the artist information */}
                  <div className="bg-gray-200 outline outline-2 outline-gray-300 inline-flex pr-8 mb-8 mr-8 rounded-xl items-center">
                      <img
                          src={props.artistImage}
                          alt="artist image"
                          width="125"
                          className="mr-4 rounded-xl aspect-square"
                      />

                      <div className="text-left my-4 text-l">
                          <span className="font-semibold text-2xl">
                              {props.artistName[0]}
                          </span>
                          {props.artistName.slice(1)}
                      </div>
                  </div>

                  {/* displays the album information */}
                  <div className="bg-gray-200 outline outline-2 outline-gray-300 inline-flex pl-4 mb-8 rounded-xl items-center max-w-md">
                      <div className="text-right my-4 text-l">
                          <span className="font-semibold text-2xl">
                              {props.albumName}
                          </span>
                          <p>{props.releaseDate}</p>
                      </div>

                      <img
                          src={props.albumCover}
                          alt="album cover"
                          width="125"
                          className="ml-4 rounded-xl aspect-square"
                      />
                  </div>
              </div>
          </div>
          <iframe
              src={props.id}
              width="auto"
              height="152"
              className="mt-8"
          ></iframe>
          <p className="">Genres: {props.genres}</p>
      </div>
  );
};
