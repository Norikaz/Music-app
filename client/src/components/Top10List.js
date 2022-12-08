import React, { useState, useEffect } from "react";
import { useInfoContext } from "./context/InfoContext";
import axios from "axios";
import { Carousel } from "flowbite-react"

export const Top10List = (props) => {
  const [playlistInfo, setPlaylistInfo] = useState("");
  const [cardArr, setCardArr] = useState([]);

  const token = useInfoContext().token;

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
        return (
            <div className="w-1/4 m-auto lg:w-1/5 m-auto" >
                <h1 className="font-semibold text-xl text-left">
                    { props.index + 1 }
                </h1>
                <img
                    src={
                        props.playlistInfo
                            ? props.playlistInfo.items[props.index].track.album
                                  .images[0].url
                            : ""
                    }
                    className="lg: w-72 h-68 m-auto rounded-full"
                    alt=""
                ></img>
                <h1 className="font-semibold text-xl text-center">
                    {props.playlistInfo
                        ? props.playlistInfo.items[props.index].track.name
                        : "N/A"}
                </h1>
                <h1 className="font-semibold text-xl text-center ">
                    {props.playlistInfo
                        ? props.playlistInfo.items[props.index].track.artists[0]
                              .name
                        : "N/A"}
                </h1>
            </div>
        );
    }

    return (
        <div className="bg-gray-400 m-auto rounded-xl max-w-[95%] text-xl font-inter ">
            <p className="p-3 mx-10 inline-block">Top Rated Songs</p>
            <hr className="mx-8 border-black"/>
            {/* imported from flowbite */}
                <Carousel slide={false} className="p-10">
                    {cardArr}
                </Carousel>

        </div>
 
    );
};
