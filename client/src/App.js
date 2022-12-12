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
import { AuthProvider } from "./components/context/AuthContext";
import { InfoContextProvider } from "./components/context/InfoContext";

//get id and secret from https://developer.spotify.com/dashboard
//and put them in .env file (temporary), this will go in the backend later

export const App = () => {
  return (
    <AuthProvider>
      <InfoContextProvider>
        <Layout>
          <Routes>
            {/* displays a search bar and a carousel of 10 songs*/}
            <Route path="/" element={<HomePage />} />
            {/*displays the info and reviews on individual songs*/}
            <Route path="/song-details" element={<SongPage />} />
            {/* search results will be displayed as a list on this page */}
            <Route path="/search-results" element={<SearchResultsPage />} />
            <Route path="/posts/new" element={<PostFormPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Layout>
      </InfoContextProvider>
    </AuthProvider>
  );
};
