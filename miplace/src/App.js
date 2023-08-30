import "./App.css";
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import HotelInfo from './pages/HotelInfo'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Login from './components/LoginFormComponent';
import OTP from './pages/OTP'
function App() {
  return (

    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/hotelinfo" element={<HotelInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
      </Routes>
     <FooterComponent/>
    </BrowserRouter>


  );
}

export default App;
