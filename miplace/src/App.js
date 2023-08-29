import "./App.css";
import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import HotelInfo from './pages/HotelInfo'
function App() {
  return (
      <BrowserRouter>
        <Routes>

        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/hotelinfo" element={<HotelInfo />} />
        </Routes>
      </BrowserRouter>
     
    
  );
}

export default App;
