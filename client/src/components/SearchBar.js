import React, {
  Fragment,
  useState,
  useImperativeHandle,
  forwardRef,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "./UI/LoadingSpinner";
import { useInfoContext } from "./context/InfoContext";

import axios from "axios";

export const SearchBar = forwardRef(({ limit = 10, offset = 0 }, ref) => {
  const infoContext = useInfoContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [dropDownClicked, setDropDownClicked] = useState(false);
  const [dropDownOption, setDropDownOption] = useState("track");
  const { searchTerm, setSearchTerm } = infoContext.searchTermProvider;
  const { searchResults, setSearchResults } = infoContext.searchResultsProvider; //Stores 20 search results from Spotify API
  const token = infoContext.token;
  const navigate = useNavigate();
  //const [spotifyArtistInfo, setSpotifyArtistInfo] = useState(null);

  useImperativeHandle(ref, () => ({
    fetchSongRef() {
      fetchSong();
    },
  }));

  //get song through spotify search, default is 20 results
  //can set custom limit by appending &limit=n to end of query
  const fetchSong = () => {
    setIsLoading(true);
    axios(
      `https://api.spotify.com/v1/search?q=${dropDownOption}:${
        searchTerm ? searchTerm : searchTerm
      }&type=track&limit=${limit}&offset=${offset}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
        method: "GET",
      }
    )
      .then((response) => {
        console.log(offset);
        setSearchResults(response.data.tracks.items);
        setIsLoading(false);
        navigate("/search-results");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.message);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (searchTerm.trim().length === 0) {
      return;
    }

    fetchSong();
  };

  return (
    <Fragment>
      <form
        onSubmit={submitHandler}
        className="container relative mx-auto my-8 xl:max-w-[50%] lg:max-w-[75%] md:max-w-[90%] sm:max-w-[95%]"
      >
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
            className="h-12 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
            onClick={() => setDropDownClicked((prev) => !prev)}
          >
            {dropDownOption.charAt(0).toUpperCase() + dropDownOption.slice(1)}
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-1"
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
            } z-20 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-14`}
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
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    setDropDownOption("track");
                    setDropDownClicked(false);
                  }}
                >
                  Track
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    setDropDownOption("artist");
                    setDropDownClicked(false);
                  }}
                >
                  Artist
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    setDropDownOption("album");
                    setDropDownClicked(false);
                  }}
                >
                  Album
                </button>
              </li>
            </ul>
          </div>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="h-12 block p-2.5 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-green-400 focus:border-green-400"
              placeholder={`Search by ${dropDownOption}`}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 h-12 p-3 text-sm font-medium text-white bg-green-400 border border-green-400 rounded-r-lg hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300"
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
});
