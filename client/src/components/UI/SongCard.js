import React from "react";
import { useNavigate } from "react-router-dom";

export const SongCard = (props) => {
  const navigate = useNavigate();

  const starSVG = () => {
    return (
      <svg
        aria-hidden="true"
        className="inline-block w-6 h-6 mb-1 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    );
  };

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
            {starSVG()}
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
