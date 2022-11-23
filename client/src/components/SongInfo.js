import React from "react";
import { Card } from "./UI/Card";

//displays the song information on SearchSongPage
export const SongInfo = (props) => {

  return (
    <div className="bg-gray-100 mx-auto my-6 rounded-xl max-w-[95%] w-30 p-16 font-inter">
      <h1 className="font-semibold sm:text-4xl text-3xl text-left">
        {props.songName}
      </h1>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 ">
        {/* main cover image */}
        <div className="flex 2xl:flex lg:block justify-center lg:justify-start">
          <img
            src={props.albumCover}
            alt="album cover"
            width="500"
            height="auto"
            className="mt-8 rounded-xl"
          />
        </div>

        <div className="grid xl:col-span-2 xl:grid-rows-3 xl:grid-cols-2 grid-rows-5 grid-cols-1 gap-3 mt-8">
          {/* displays the song ratings information */}

          <div className="xl:col-span-2 col-span-1 grid grid-rows-2 grid-cols-3 grid-flow-col bg-gray-200 outline outline-2 outline-gray-300 rounded-xl items-center">
            <h2 className="font-semibold sm:text-2xl text-l">Average Score</h2>
            <p className="text-xl">
              9.99 <span className="text-2xl">★</span>
            </p>
            <h2 className="font-semibold sm:text-2xl text-l">Your Score</h2>
            <p className="text-xl">
              9.99 <span className="text-2xl">★</span>
            </p>
            <h2 className="font-semibold sm:text-2xl text-l">
              Relevance Score
            </h2>
            <p className="text-xl">{props.relevance}</p>
          </div>

          {/* displays the artist information */}
          <div className="bg-gray-200 outline outline-2 outline-gray-300 max-h-[7.8rem] inline-flex my-4 rounded-xl items-center">
            <img
              src={props.artistImage}
              alt="artist image"
              width="125"
              className="mr-4 rounded-xl aspect-square"
            />

            <div className="text-left my-4 text-l">
              <span className="font-semibold sm:text-2xl text-xl">
                {props.artistName[0]}
              </span>
              {props.artistName.slice(1)}
            </div>
          </div>

          {/* displays the album information */}
          <div className="bg-gray-200 outline outline-2 outline-gray-300 max-h-[7.8rem] inline-flex my-4 rounded-xl items-center justify-end">
            <div className="text-right my-4 text-l">
              <span className="font-semibold sm:text-2xl text-xl">
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

          {/*displays genre information */}
          <div className="bg-gray-200 outline outline-2 outline-gray-300 max-h-[9.4rem] inline-flex p-5 rounded-xl items-center">
            <div className="text-left my-4 font-semibold sm:text-2xl text-x l">
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
