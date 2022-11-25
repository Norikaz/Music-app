import React from "react";
import { Card } from "./UI/Card";

//displays the song information on SearchSongPage
export const SongInfo = (props) => {

  return (
    <div className="bg-gray-100 mx-auto my-6 rounded-xl max-w-[95%] w-30 p-16 font-inter">
      <h1 className="font-semibold sm:text-4xl text-3xl text-left">
        {props.songName}
      </h1>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
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

        <div className="grid xl:col-span-2 xl:grid-rows-3 xl:grid-cols-2 grid-rows-5 grid-cols-2 gap-3 mt-8">
          {/* displays the song ratings information */}

          <div className="col-span-2 grid grid-rows-2 grid-cols-3 grid-flow-col bg-gray-200 outline outline-2 outline-gray-300 rounded-xl items-center">
            <h2 className="font-semibold sm:text-2xl text-l">Average Score</h2>
            <p className="text-xl">
              9.99 <span className="text-2xl">★</span>
            </p>
            <h2 className="font-semibold sm:text-2xl text-l">Your Score</h2>
            <div className="text-xl">
              <button
                className="sm:scale-100 sm:mx-2 scale-[0.75] mx-[0.2rem] bg-gray-100 hover:bg-gray-300 active:bg-gray-400 active:scale-[0.85] active:text-l outline outline-1 outline-gray-300 px-[0.6rem] rounded-lg"
                onClick={props.handleRatingDecrease}
              >
                -
              </button>
              {props.userRating.toFixed(1)}
              <button
                className="sm:scale-100 sm:mx-2 scale-[0.75] mx-[0.2rem] bg-gray-100 hover:bg-gray-300 active:bg-gray-400 active:scale-[0.85] active:text-l outline outline-1 outline-gray-300 px-2 rounded-lg"
                onClick={props.handleRatingIncrease}
              >
                +
              </button>
              <span className="text-2xl">★</span>
            </div>
            <h2 className="font-semibold sm:text-2xl text-l">
              Relevance Score
            </h2>
            <p className="text-xl">{props.relevance}</p>
          </div>

          {/* displays the artist information */}
          <div className="xl:col-span-1 col-span-2 bg-gray-200 outline outline-2 outline-gray-300 max-h-[7.8rem] inline-flex my-4 rounded-xl items-center">
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
          <div className="xl:col-span-1 col-span-2 bg-gray-200 outline outline-2 outline-gray-300 max-h-[7.8rem] inline-flex my-4 rounded-xl items-center justify-end overflow-hidden">
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
          <div className="grid grid-cols-1 grid-rows-3 md:col-span-1 col-span-2 bg-gray-200 outline outline-2 outline-gray-300 max-h-[9.4rem] p-4 rounded-xl overflow-hidden">
            <div className="border-2 border-b-gray-500 text-left font-semibold pb-2 sm:text-2xl text-xl">
              Genres
            </div>
            <div className="text-left ml-4 mt-2 text-l">{props.genres}</div>
          </div>

          {/*displays spotify widget */}
          <iframe
            src={props.id}
            height="100%"
            width="100%"
            className="md:col-span-1 col-span-2 inline-flex"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
