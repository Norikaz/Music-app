import React from "react";
import classes from "./SongsList.module.css";

export const SongsList = (props) => {
  return (
    <div className={classes["songs-list"]}>
      <div>
        <ul className={classes["songs-list-items"]}></ul>
      </div>
    </div>
  );
};
