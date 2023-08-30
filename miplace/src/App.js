import "./App.css";
import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
>>>>>>> 2a6e0b9e46cf7d3ffa8848a05323453bc60e9ac2
import HomePage from './pages/Home';
import HotelInfo from './pages/HotelInfo'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Login from './components/LoginFormComponent';
import OTP from './pages/OTP'
function App() {
  return (
<<<<<<< HEAD
    <Router>
        <Routes>
=======
>>>>>>> 2a6e0b9e46cf7d3ffa8848a05323453bc60e9ac2

    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/hotelinfo" element={<HotelInfo />} />
<<<<<<< HEAD
        </Routes>
        </Router>
     
    
=======
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
      </Routes>
     <FooterComponent/>
    </BrowserRouter>


>>>>>>> 2a6e0b9e46cf7d3ffa8848a05323453bc60e9ac2
  );
}

export default App;
