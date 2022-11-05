import React, { Fragment, useState } from "react";
import { LoadingSpinner } from "./UI/LoadingSpinner";

export const SearchBar = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [songInput, setSongInput] = useState("");

  const fetchSong = async (props) => {
    try {
      setIsLoading(true);
      const response = await fetch("");

      if (!response.ok) throw new Error("Somthing went wrong!");
      const data = response.json();

      props.getSongList(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (songInput.trim().length === 0) {
      return;
    }

    fetchSong();
  };

  return (
    <Fragment>
      <form onSubmit={onSubmitHandler} className="">
        <label htmlFor="search-song">
          <h1>Find Your Next Favorite Song</h1>
        </label>
        <input
          className=""
          type="text"
          placeholder="Search"
          id="search-song"
          value={songInput}
          onChange={(event) => setSongInput(event.target.value)}
        />
        {isLoading && <LoadingSpinner />}
      </form>
    </Fragment>
  );
};
