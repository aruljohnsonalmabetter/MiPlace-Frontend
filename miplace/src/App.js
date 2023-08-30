import "./App.css";
import React from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import HotelInfo from './pages/HotelInfo'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Login from './components/LoginFormComponent';
import OTP from './pages/OTP'
import BookingInfoandBill from './pages/BookingInfoandBill'
import MyBookings from './pages/MyBookings'
import EmailUsContactUs from './pages/EmailUsContactUs'
import CustomerSupport from './pages/CustomerSupport'
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
        <Route path="/bookingInfoandBill" element={<BookingInfoandBill/>} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/emailuscontactus" element={<EmailUsContactUs />} />
        <Route path="/customersupport" element={<CustomerSupport />} />

      </Routes>
     <FooterComponent/>
    </BrowserRouter>


  );
}

export default App;
