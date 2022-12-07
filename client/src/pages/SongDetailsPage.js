import React, { useState, useEffect, useContext } from "react";
import { SongInfo } from "../components/SongInfo";
import { useInfoContext } from "../components/context/InfoContext";
import { ReviewContainer } from "../components/ReviewContainer";
import useAxiosFetchSpotify from "../components/hooks/useAxiosFetchSpotify";

//this will be the song page that will display information about each song
//users will be sent to this page whenever they click on a song on the home page or the search results page
//https://www.figma.com/file/0BuMDTJLOjiYCjR997Lrif/muschart?node-id=34%3A230
export const SongPage = (props) => {
  const [artistInfo, setArtistInfo] = useState(null);
  const [userRating, setUserRating] = useState("N/A"); // for allowing users to choose a rating score

  const infoContext = useInfoContext();
  const token = infoContext.token;
  const { songInfo } = infoContext.songInfoProvider;

  const handleRatingIncrease = () => {
    if (userRating === "N/A") {
      setUserRating(0);
    } else if (userRating < 10) {
      setUserRating((prevRating) => prevRating + 0.5);
    }
  };

  const handleRatingDecrease = () => {
    if (userRating === 0) {
      setUserRating("N/A");
    } else if (userRating > 0) {
      setUserRating((prevRating) => prevRating - 0.5);
    }
  };

  //get artist information by artist id provided by songInfo
  const { isLoading, isError, data } = useAxiosFetchSpotify(
    () => {
      if (songInfo)
        return `https://api.spotify.com/v1/artists/${songInfo.artists[0].id}`;
    },
    token,
    [songInfo]
  );

  console.log("isLoading: " + isLoading);
  console.log("isError: " + isError);

  useEffect(() => {
    setArtistInfo(data);
    console.log(data);
  }, [data]);

  return (
    <div className="mt-12 text-center">
      <div>
        <SongInfo
          songName={songInfo ? songInfo.name : "N/A"}
          albumName={songInfo ? songInfo.album.name : "N/A"}
          releaseDate={songInfo ? songInfo.album.release_date : "N/A"}
          relevance={songInfo ? songInfo.popularity / 10 : "N/A"}
          albumCover={
            songInfo
              ? `${songInfo.album.images[1].url}`
              : "https://via.placeholder.com/150?text=No+Image"
          }
          artistName={
            songInfo
              ? songInfo.artists.map((artist) => <p>{artist.name}</p>)
              : ["N/A"]
          }
          artistImage={
            artistInfo
              ? artistInfo.images[2].url
              : "https://via.placeholder.com/150?text=No+Image"
          }
          genres={
            artistInfo && artistInfo.genres.length > 0
              ? artistInfo.genres.map(
                  (genre, i) =>
                    genre.charAt(0).toUpperCase() +
                    genre.slice(1) +
                    (i + 1 === artistInfo.genres.length ? "" : ", ")
                )
              : "N/A"
          }
          userRating={userRating === "N/A" ? userRating : userRating.toFixed(1)}
          handleRatingIncrease={handleRatingIncrease}
          handleRatingDecrease={handleRatingDecrease}
          id={
            songInfo
              ? "https://open.spotify.com/embed/track/" + songInfo.id
              : ""
          }
        />
      </div>

      <ReviewContainer />
    </div>
  );
};;
