import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { PostsListPage } from "./pages/PostsListPage";
import { PostFormPage } from "./pages/PostFormPage";
import { ShowPostPage } from "./pages/ShowPostPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { SongPage } from "./pages/SongPage";
import { Navigation } from "./components/Navigation";
import ContactPage from "./pages/ContactPage";

export const App = () => {
  const [songListItems, setSongListItems] = useState([]);

  const getSongList = (songList) => {
    setSongListItems(songList);
  };

  console.log(songListItems);
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container-xl text-center mt-12">
        <div className="row justify-content-center">
          <Routes>
            <Route path="/posts/new" element={<PostFormPage />} />
            <Route path="/posts/:id" element={<ShowPostPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/" element={<SongPage />} />
            <Route path="/" element={<PostsListPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
