// import "./App.css";
// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/Home";
// import HotelInfo from "./pages/HotelInfo";
// import SearchResults from "./pages/SearchResults";
// import { HeaderComponent } from "./components/HeaderComponent";
// import { FooterComponent } from "./components/FooterComponent";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//       <HeaderComponent />
//         <Routes>
//           <Route index element={<HomePage />} />
//           <Route path="/home" element={<HomePage />} />
//           <Route path="/hotelinfo" element={<HotelInfo />} />
//         </Routes>
//       <FooterComponent />
//       </BrowserRouter>

//     </>

import "./App.css";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import HotelInfo from "./pages/HotelInfo";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Login from "./components/LoginFormComponent";
import OTP from "./pages/OTP";
import SearchResults from "./pages/SearchResults";
import ErrorScreen from "./pages/ErrorScreen";
import { WriteReview } from "./components/WriteReview";
import BookingInfoandBill from "./pages/BookingInfoandBill";
import MyBookings from "./pages/MyBookings";
import EmailUsContactUs from "./pages/EmailUsContactUs";
import CustomerSupport from "./pages/CustomerSupport";
import TermsofServicePage from "./pages/TermsofServicePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Favorites } from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/hotelinfo" element={<HotelInfo />} />
        <Route path="/searchResults" element={<SearchResults />} />

        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/bookingInfoandBill" element={<BookingInfoandBill />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/emailuscontactus" element={<EmailUsContactUs />} />
        <Route path="/customersupport" element={<CustomerSupport />} />

        <Route path="/writeReview" element={<WriteReview />} />
        <Route path="/termsOfservice" element={<TermsofServicePage />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
