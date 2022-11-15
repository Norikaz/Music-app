import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PostsListPage } from "./pages/PostsListPage";
import { PostFormPage } from "./pages/PostFormPage";
import { ShowPostPage } from "./pages/ShowPostPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { SongPage } from "./pages/SongDetailsPage";
import { ContactPage } from "./pages/ContactPage";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { SearchResultsPage } from "./pages/SearchResultListPage";
import axios from "axios";

//get id and secret from https://developer.spotify.com/dashboard
//and put them in .env file (temporary), this will go in the backend later
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const App = () => {
    const [token, setToken] = useState("");

    //get spotify token
    useEffect(() => {
        axios("https://accounts.spotify.com/api/token", {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization:
                    "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
            },
            data: "grant_type=client_credentials",
            method: "POST",
        }).then((response) => {
            setToken(response.data.access_token);
        });
    }, [CLIENT_ID, CLIENT_SECRET]);

    return (
        <Layout>
            <Routes>
                // automatically displays a list of songs for the user to choose
                from
                <Route path="/" element={<HomePage token={token} />} />
                // user will be able to search song on this page
                <Route
                    path="/song-details"
                    element={<SongPage token={token} />}
                />
                <Route
                    path="/search-song"
                    element={<SearchResultsPage token={token} />}
                />
                <Route path="/posts/new" element={<PostFormPage />} />
                <Route path="/posts/:id" element={<ShowPostPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Layout>
    );
};
