import React, { useState, useEffect } from "react";
import { useInfoContext } from "./context/InfoContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Carousel } from "flowbite-react";

export const Top10List = (props) => {
  const infoContext = useInfoContext();
  const [playlistInfo, setPlaylistInfo] = useState("");
  const [cardArr, setCardArr] = useState([]);
  const navigate = useNavigate();
  const token = infoContext.token;
  const { setSongInfo } = infoContext.songInfoProvider;

  useEffect(() => {
    if (playlistInfo === "" && token) {
      //Grabs Todays Top Hits playlist from spotify
      axios(`https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M`, {
        headers: {
          Authorization: "Bearer " + token,
        },
        method: "GET",
      })
        .then((res) => {
          setPlaylistInfo(res.data.tracks);
          let arr = [];
          for (let i = 0; i < 10; i++)
            arr.push(<Card playlistInfo={res.data.tracks} key={i} index={i} />);
          setCardArr(arr);
        })
        .catch(console.log("error"));
    }
  }, [Card]);

  console.log(playlistInfo);

  function Card(props) {
    const handleClick = () => {
      setSongInfo(props.playlistInfo.items[props.index].track);
      navigate("/song-details");
    };

    return (
      <div className="h-[32rem] cursor-pointer" onClick={handleClick}>
        <div className="absolute w-[90%] h-[100%] text-white bg-gradient-to-r from-black to-transparent">
          <h1 className="mt-8 ml-8 text-4xl font-semibold text-left">
            {props.index + 1}
          </h1>
          <h1 className="ml-8 text-2xl font-semibold text-left">
            {props.playlistInfo
              ? props.playlistInfo.items[props.index].track.name
              : "N/A"}
          </h1>
          <h1 className="ml-8 text-xl font-semibold text-left">
            {props.playlistInfo
              ? props.playlistInfo.items[props.index].track.artists[0].name
              : "N/A"}
          </h1>
        </div>
        <img
          src={
            props.playlistInfo
              ? props.playlistInfo.items[props.index].track.album.images[0].url
              : ""
          }
          className="z-[-1] absolute w-[100%] -translate-y-1/4"
          alt=""
        ></img>
      </div>
    );
  }

  return (
    <div>
      <p className="inline-block p-3 mx-10 text-xl font-inter ">
        Trending Songs
      </p>
      <hr className="mx-8 mb-4 border-black" />
      <div className="bg-gray-400 m-auto rounded-2xl max-w-[95%] mb-12">
        {/* imported from flowbite */}
        <Carousel slideInterval={10000} className="">
          {cardArr}
        </Carousel>
      </div>
    </div>
  );
};
