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
      <form onSubmit={onSubmitHandler} className="text-center mt-12">
        <label htmlFor="search-song">
          <h1 className="text-4xl font-bold">Find Your Next Favorite Song</h1>
        </label>
        <input
          className="mt-6 p-2 bg-slate-500 rounded-full"
          type="text"
          placeholder="Enter Artist, Album, Genre..."
          id="search-song"
          value={songInput}
          onChange={(event) => setSongInput(event.target.value)}
        />
        {isLoading && <LoadingSpinner />}
      </form>
    </Fragment>
  );
};
