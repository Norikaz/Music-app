import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { PostsListPage } from "./pages/PostsListPage";
import { PostFormPage } from "./pages/PostFormPage";
import { ShowPostPage } from "./pages/ShowPostPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { SongPage } from "./pages/SongPage";
import { Navigation } from "./components/Navigation";
import { SearchBar } from "./components/SearchBar";
import { SongsList } from "./components/SongsList";

export const App = () => {
    const [songListItems, setSongListItems] = useState([]);

    const getSongList = (songList) => {
        setSongListItems(songList);
    };

    return (
        <BrowserRouter>
            <Navigation />
            <SearchBar getSongList={getSongList} />
            <SongsList songListItems={songListItems} />
            <div className="container-xl text-center">
                <div className="row justify-content-center">
                    <Routes>
                        <Route path="/posts/new" element={<PostFormPage />} />
                        <Route path="/posts/:id" element={<ShowPostPage />} />
                        <Route path="/about-us" element={<AboutUsPage />} />
                        <Route path="/song/" element={<SongPage />} />
                        <Route path="/" element={<PostsListPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};
