import React from "react";
import { useNavigate } from "react-router-dom";
import { star } from "./SVG";

export const SongCard = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    props.setSongInfo(props.songObject);
    navigate("/song-details");
  };

  return (
    <div className="relative cursor-pointer group/card" onClick={handleClick}>
      <div className="relative z-10 w-full h-full overflow-hidden transition ease-in-out rounded-xl bg-slate-100 group-hover/card:bg-slate-200 group-hover/card:-translate-y-2 group-hover/card:-translate-x-2">
        <img src={props.albumCover} />
        <div className="mx-3 my-2">
          <h2 className="text-lg font-bold">
            {props.songName} • <span className="font-medium">9.99</span>
            {star}
          </h2>
          <h1>{props.artistName}</h1>
          <h1 className="text-sm">{props.albumName}</h1>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 invisible w-full h-full bg-green-400 group-hover/card:visible rounded-xl">
        <br />
      </div>
    </div>
  );
};
