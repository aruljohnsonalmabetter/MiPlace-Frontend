import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import HotelInfo from './pages/HotelInfo'
function App() {
  return (
    <Router>
        <Routes>

        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/hotelinfo" element={<HotelInfo />} />
        </Routes>
        </Router>
     
    
  );
}

export default App;
