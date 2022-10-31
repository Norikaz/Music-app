import React, { Fragment } from "react";
import classes from "./SearchBar.module.css";

export const SearchBar = () => {
  return (
    <Fragment>
      <form className={classes["form-search"]}>
        <label htmlFor="search-song">
          <h1>Find Your Next Favorite Song</h1>
        </label>
        <input
          type="text"
          placeholder="Search"
          id="search-song"
          className={classes["searchbar"]}
        />
      </form>
    </Fragment>
  );
};
