import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { PostsListPage } from "./pages/PostsListPage";
import { PostFormPage } from "./pages/PostFormPage";
import { ShowPostPage } from "./pages/ShowPostPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { SongPage } from "./pages/SearchSongPage";
import { ContactPage } from "./pages/ContactPage";
import { Layout } from "./components/layout/Layout";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/posts/new" element={<PostFormPage />} />
        <Route path="/posts/:id" element={<ShowPostPage />} />
        <Route path="/" element={<SongPage />} />
        <Route path="/" element={<PostsListPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
};
