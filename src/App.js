import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import React from "react";
import Layout from "./components/layout/Layout";

function App() {
  // localhost:3000/favorites
  // my-page.com/

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorite" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
