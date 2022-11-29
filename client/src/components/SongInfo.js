import React from "react";
import { ScoreCard } from "./UI/ScoreCard";
import { Card } from "./UI/Card";

//displays the song information on SearchSongPage
export const SongInfo = (props) => {
  return (
    <div className="bg-gray-100 mx-auto my-6 rounded-xl max-w-[95%] w-30 p-16 font-inter">
      <h1 className="text-3xl font-semibold text-left sm:text-4xl">
        {props.songName}
      </h1>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 lg:grid-cols-2">
        {/* main cover image */}
        <div className="flex justify-center 2xl:flex lg:block lg:justify-start">
          <img
            src={props.albumCover}
            alt="album cover"
            width="500"
            height="auto"
            className="mt-8 rounded-xl"
          />
        </div>

        <div className="grid grid-cols-2 grid-rows-5 gap-3 mt-8 xl:col-span-2 xl:grid-rows-3">
          {/* displays the song ratings information */}
          <ScoreCard
            userRating={props.userRating}
            handleRatingIncrease={props.handleRatingIncrease}
            handleRatingDecrease={props.handleRatingDecrease}
            relevance={props.relevance}
          />

          {/* displays the artist information */}
          <div className="xl:col-span-1 col-span-2 bg-gray-200 outline outline-2 outline-gray-300 max-h-[7.8rem] inline-flex my-4 rounded-xl items-center overflow-hidden">
            <img
              src={props.artistImage}
              alt="artist image"
              width="125"
              className="mr-4 rounded-xl aspect-square"
            />

            <div className="my-4 text-left text-l">
              <span className="text-xl font-semibold sm:text-2xl">
                {props.artistName[0]}
              </span>
              {props.artistName.slice(1)}
            </div>
          </div>

          {/* displays the album information */}
          <div className="xl:col-span-1 col-span-2 bg-gray-200 outline outline-2 outline-gray-300 max-h-[7.8rem] inline-flex justify-end my-4 rounded-xl items-center overflow-hidden ">
            <div className="my-4 text-right text-l">
              <span className="text-xl font-semibold sm:text-2xl">
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
            <div className="pb-2 text-xl font-semibold text-left border-2 sm:text-2xl border-b-gray-500 ">
              Genres
            </div>
            <div className="mt-2 ml-4 text-left text-l">{props.genres}</div>
          </div>

          {/*displays spotify widget */}
          <iframe
            src={props.id}
            height="100%"
            width="100%"
            className="inline-flex col-span-2 md:col-span-1"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
