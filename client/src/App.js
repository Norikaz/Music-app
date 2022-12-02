import React, { useState, useEffect, useMemo } from "react";
import { Routes, Route, Router } from "react-router-dom";
import { PostsListPage } from "./pages/PostsListPage";
import { PostFormPage } from "./pages/PostFormPage";
import { ShowPostPage } from "./pages/ShowPostPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { SongPage } from "./pages/SongDetailsPage";
import { ContactPage } from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { SearchResultsPage } from "./pages/SearchResultListPage";
import { TokenContext } from "./components/context/TokenContext";
import { SongInfoContext } from "./components/context/SongInfoContext";
import { SearchResultsContext } from "./components/context/SearchResultsContext";
import { AuthProvider } from "./components/context/AuthContext";
import axios from "axios";

//get id and secret from https://developer.spotify.com/dashboard
//and put them in .env file (temporary), this will go in the backend later
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const App = () => {
  const [token, setToken] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [songInfo, setSongInfo] = useState(null);

  const songInfoProvider = useMemo(
    () => ({ songInfo, setSongInfo }),
    [songInfo, setSongInfo]
  );
  const searchResultsProvider = useMemo(
    () => ({ searchResults, setSearchResults }),
    [searchResults, setSearchResults]
  );

  //get spotify token
  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((response) => {
      setToken(response.data.access_token);
    });
  }, [CLIENT_ID, CLIENT_SECRET]);

  return (
    <AuthProvider>
      <Layout>
        <SongInfoContext.Provider value={songInfoProvider}>
          <SearchResultsContext.Provider value={searchResultsProvider}>
            <TokenContext.Provider value={token}>
              <Routes>
                {/* displays a search bar and a carousel of 10 songs*/}
                <Route path="/" element={<HomePage />} />
                {/*displays the info and reviews on individual songs*/}
                <Route path="/song-details" element={<SongPage />} />
                {/* search results will be displayed as a list on this page */}
                <Route path="/search-results" element={<SearchResultsPage />} />
                <Route path="/posts/new" element={<PostFormPage />} />
                <Route path="/posts/:id" element={<ShowPostPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
              </Routes>
            </TokenContext.Provider>
          </SearchResultsContext.Provider>
        </SongInfoContext.Provider>
      </Layout>
    </AuthProvider>
  );
};
