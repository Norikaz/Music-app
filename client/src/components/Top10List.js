import React, { useState,useEffect } from "react";
import axios from "axios";


export const Top10List = (props) => {
  const [playlistInfo, setPlaylistInfo] = useState("")
  const [cardArr, setCardArr] = useState([])   


  useEffect(() => {
      if(playlistInfo === "" && props.token){
      //Grabs Todays Top Hits playlist from spotify  
      axios(
          `https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M`,
          {
              headers: {
                  Authorization: "Bearer " + props.token,
              },
              method: "GET",
          }
      ).then(res => {
          setPlaylistInfo(res.data.tracks);
          let arr =[]
          for(let i = 0; i < 10; i++)
            arr.push(<Card playlistInfo={res.data.tracks} key={i} index={i}/>)
          setCardArr(arr)
      })
      .catch(console.log("error"))
  }
  },[Card])

  console.log(playlistInfo)

  function Card(props){
    return (
      <div className="snap-start shrink-0">
        <h1 className="font-semibold text-2xl text-left">{props.index + 1}</h1>
        <img src={props.playlistInfo ? props.playlistInfo.items[props.index].track.album.images[0].url : ""} className="max-w-[35%]"></img>
        <h1 className="font-semibold text-2xl text-left">{props.playlistInfo ? props.playlistInfo.items[props.index].track.name : "N/A"}</h1>
        <h1 className="font-semibold text-2xl text-left">{props.playlistInfo ? props.playlistInfo.items[props.index].track.artists[0].name : "N/A"}</h1>
      </div>            
    );
}


  return (
      <div className="bg-gray-200 mx-auto my-6 rounded-xl max-w-[95%] w-30 p-16 font-inter">
        {/* creates the scrollable effect */}
        <div className="flex snap-x overflow-auto">
          {cardArr}
        </div>
      </div>
  );
};
