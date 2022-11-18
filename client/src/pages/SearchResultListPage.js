import React, { useState, useEffect } from "react";
import { SearchBar } from "../components/SearchBar";

//this will be the search results page that displays the response from the API
//when a search query is entered through the search bar
//https://www.figma.com/file/0BuMDTJLOjiYCjR997Lrif/muschart?node-id=26%3A14
export const SearchResultsPage = (props) => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};
