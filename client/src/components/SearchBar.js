import React, { Fragment, useState, useEffect } from "react";
import { LoadingSpinner } from "./UI/LoadingSpinner";

import axios from "axios";

export const SearchBar = (props) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [dropDownClicked, setDropDownClicked] = useState(false);

  const [userInput, setUserInput] = useState("");
  // stores 20 results from the API, will use this in the search results page later
  const [searchResponse, setSearchResponse] = useState(null);
  //const [spotifyArtistInfo, setSpotifyArtistInfo] = useState(null);

  //get song through spotify search, default is 20 results
  //can set custom limit by appending &limit=n to end of query
  const fetchSong = () => {
    setIsLoading(true);
    axios(`https://api.spotify.com/v1/search?q=track:${userInput}&type=track`, {
      headers: {
        Authorization: "Bearer " + props.token,
      },
      method: "GET",
    })
      .then((response) => {
        setSearchResponse(response.data.tracks.items);
        //sends the first song from response to SearchSongPage
        //temporary until we have the search results page
        if (props.parent === "SearchSongPage") {
          props.setApiData(response.data.tracks.items[0]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
        console.log(error.message);
      });
  };

  /*
  //get artist information by artist id provided by searchResponse
  useEffect(() => {
    if (searchResponse) {
            axios(`https://api.spotify.com/v1/artists/${"query"}`, {
                headers: {
                  Authorization: "Bearer " + token,
                },
                method: "GET",
              }).then((response) => {
                setSpotifyArtistInfo(response);
              });
            }
          }, []);
          */

  const submitHandler = (event) => {
    event.preventDefault();
    if (userInput.trim().length === 0) {
      return;
    }
    fetchSong();
    console.log("SONG INFO");
    console.log(searchResponse);
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler} className="container mx-auto relative">
        <div className="flex">
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Your Email
          </label>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
            onClick={() => setDropDownClicked((prev) => !prev)}
          >
            All categories{" "}
            <svg
              aria-hidden="true"
              className="ml-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className={`${
              dropDownClicked ? "" : "hidden"
            } z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-11`}
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="top"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Song
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Artist
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Album
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Genre
                </button>
              </li>
            </ul>
          </div>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search Songs, Albums, Artist..."
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
      {isLoading && <LoadingSpinner />}
    </Fragment>
  );
};
