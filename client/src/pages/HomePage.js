import axios from "axios";
import React, { useState, useEffect } from "react";
import { SearchBar } from "../components/SearchBar";
import { Top10List } from "../components/Top10List";
//this is the landing page of the website
//https://www.figma.com/file/0BuMDTJLOjiYCjR997Lrif/muschart?node-id=0%3A1




export const HomePage = (props) => {

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6 my-6 text-center">
                Find Your Next Favorite Song!
            </h1>
            <Top10List token={props.token}/>
        </div>
    );
};
