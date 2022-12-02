import React, { useState, useContext } from "react";
import { SearchBar } from "../components/SearchBar";
import { SongCard } from "../components/UI/SongCard";
import { SearchResultsContext } from "../components/context/SearchResultsContext";
import { SongInfoContext } from "../components/context/SongInfoContext";
import { Paging } from "../components/layout/Paging";

//this will be the search results page that displays the response from the API
//when a search query is entered through the search bar
//https://www.figma.com/file/0BuMDTJLOjiYCjR997Lrif/muschart?node-id=26%3A14
export const SearchResultsPage = (props) => {
  const { searchResults } = useContext(SearchResultsContext);
  const { setSongInfo } = useContext(SongInfoContext);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  // puts the search results into an array
  const results = searchResults.length
    ? searchResults.map((result) => (
        <SongCard
          key={result.id}
          albumCover={result.album.images[1].url}
          albumName={result.album.name}
          songName={result.name}
          songObject={result}
          artistName={result.artists[0].name}
          setSongInfo={setSongInfo}
        />
      ))
    : null;

  return (
    <div className="">
      <SearchBar />
      <div>
        {results ? (
          <Paging
            objectArray={results}
            itemsPerPage={resultsPerPage}
            pageStyling={
              "grid grid-cols-5 gap-6 grid-rows-10 mx-auto max-w-[95%] w-30 py-4 px-6 sm:px-16 font-inter"
            }
          />
        ) : (
          <div className="my-12 text-4xl text-center">No results</div>
        )}
      </div>
    </div>
  );
};
