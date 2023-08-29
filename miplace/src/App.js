import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import HotelInfo from "./pages/HotelInfo";
import SearchResults from "./pages/SearchResults";
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
function App() {
  return (
    <>
      <BrowserRouter>
      <HeaderComponent />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/hotelinfo" element={<HotelInfo />} />
          <Route path="/searchResults" element={<SearchResults />} />
        </Routes>
      <FooterComponent />
      </BrowserRouter>

    </>
  );
}

export default App;
