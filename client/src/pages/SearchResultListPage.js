import React, { useState, useEffect, useRef } from "react";
import { SearchBar } from "../components/SearchBar";
import { SongCard } from "../components/UI/SongCard";
import { useInfoContext } from "../components/context/InfoContext";
import { Paging } from "../components/layout/Paging";
import useGetWinWidth from "../components/hooks/useGetWinWidth";

//this will be the search results page that displays the response from the API
//when a search query is entered through the search bar
//https://www.figma.com/file/0BuMDTJLOjiYCjR997Lrif/muschart?node-id=26%3A14
export const SearchResultsPage = (props) => {
  const infoContext = useInfoContext();
  const { searchResults } = infoContext.searchResultsProvider;
  const { setSongInfo } = infoContext.songInfoProvider;
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [searchOffset, setSearchOffset] = useState(0);
  const winWidth = useGetWinWidth();
  const searchBarRef = useRef(null); // get the ref from the searchBar component

  useEffect(() => {
    if (winWidth > 768 && winWidth < 1280) {
      setResultsPerPage(12);
    } else setResultsPerPage(10);
  }, [winWidth]);

  // puts the search results into an array
  const results = searchResults.length
    ? searchResults.map((result) => (
        <SongCard
          key={result.id}
          albumCover={result.album.images[0].url}
          albumName={result.album.name}
          songName={result.name}
          songObject={result}
          artistName={result.artists[0].name}
          setSongInfo={setSongInfo}
        />
      ))
    : null;

  // Used to update song list on page change
  useEffect(() => {
    searchBarRef.current.fetchSongRef();
  }, [searchOffset]);

  return (
    <div className="">
      <SearchBar
        ref={searchBarRef}
        limit={resultsPerPage}
        offset={searchOffset}
      />
      <div>
        {results ? (
          <Paging
            objectArray={results}
            itemsPerPage={resultsPerPage}
            offsetHandler={setSearchOffset}
            className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6 grid-rows-10 mx-auto max-w-[95%] w-30 py-4 px-6 sm:px-16 font-inter"
          />
        ) : (
          <div className="my-12 text-4xl text-center">No results</div>
        )}
      </div>
    </div>
  );
};
