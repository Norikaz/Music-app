import React from "react";
import { Card } from "./UI/Card";

//displays the song information on SearchSongPage
export const SongInfo = (props) => {

  return (
    <div className="bg-gray-100 mx-auto my-6 rounded-xl max-w-[95%] w-30 p-16 font-inter">
      <h1 className="font-semibold text-4xl text-left">{props.songName}</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
        {/* main cover image */}
        <img
          src={props.albumCover}
          alt="album cover"
          width="411"
          height="auto"
          className="align-center mt-8 rounded-xl"
        />

        <div className="grid 2xl:grid-rows-3 2xl:grid-cols-2 grid-rows-5 grid-cols-1 gap-3 mt-8">
          {/* displays the song ratings information */}

          <div className="2xl:col-span-2 col-span-1 grid grid-rows-2 grid-cols-3 grid-flow-col bg-gray-200 outline outline-2 outline-gray-300 rounded-xl items-center">
            <h2 className="font-semibold text-2xl">Average Score</h2>
            <p className="text-xl">
              9.99 <span className="text-2xl">★</span>
            </p>
            <h2 className="font-semibold text-2xl">Your Score</h2>
            <p className="text-xl">
              9.99 <span className="text-2xl">★</span>
            </p>
            <h2 className="font-semibold text-2xl text-center"> Ranked </h2>
            <p className="text-xl">#{props.popularity}</p>
          </div>

          {/* displays the artist information */}
          <div className="bg-gray-200 outline outline-2 outline-gray-300 max-h-[7.8rem] inline-flex pr-4 my-4 rounded-xl items-center">
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
          <div className="bg-gray-200 outline outline-2 outline-gray-300 max-h-[7.8rem] inline-flex pl-4 my-4 rounded-xl items-center justify-end">
            <div className="text-right my-4 text-l">
              <span className="font-semibold text-2xl">{props.albumName}</span>
              <p>{props.releaseDate}</p>
            </div>

            <img
              src={props.albumCover}
              alt="album cover"
              width="125"
              className="ml-4 rounded-xl aspect-square"
            />
          </div>

          {/*displays genre information */}
          <div className="bg-gray-200 outline outline-2 outline-gray-300 max-h-[7.8rem] inline-flex p-5 rounded-xl items-center">
            <div className="text-left my-4 text-2xl font-semibold">
              Genres:{" "}
            </div>
            <br />
            <div className="my-4 ml-4 text-l">{props.genres}</div>
          </div>

          {/*displays spotify widget */}
          <iframe
            src={props.id}
            height="100%"
            width="100%"
            className="inline-flex"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
