import axios from "axios";
import React, { useState, useEffect } from "react";
import { SearchBar } from "../components/SearchBar";
import { Top10List } from "../components/Top10List";
//this is the landing page of the website
//https://www.figma.com/file/0BuMDTJLOjiYCjR997Lrif/muschart?node-id=0%3A1

export const HomePage = (props) => {

    return (
      <div>
        <h1 className="my-6 mb-6 text-5xl font-bold leading-normal text-center sm:leading-normal sm:text-6xl">
          Find Your Next
          <br /> Favorite Song!
        </h1>
        <SearchBar />
        <Top10List />
      </div>
    );
};
