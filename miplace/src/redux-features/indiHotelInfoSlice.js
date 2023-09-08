import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotel_name: "",
  address: "",
  city: "",
  district: "",
  main_photo_url: "",
  review_score: "",
  review_score_word: "",
  url: "",
  price_breakdown: "",
  checkIn: "",
  checkOut: "",
  //   Hotel_obj:"",
};

const indiHotelInfoSlice = createSlice({
  name: "indiHotelInfo",
  initialState,
  reducers: {
    setHotelDetails: (state, action) => {
      state.hotel_name = action.payload.hotel_name;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.district = action.payload.district;
      state.main_photo_url = action.payload.main_photo_url;
      state.review_score = action.payload.review_score;
      state.review_score_word = action.payload.review_score_word;
      state.price_breakdown = action.payload.price_breakdown;
      console.log(action.payload);
      console.log(state);
    },
  },
});

export default indiHotelInfoSlice.reducer;
export const { setHotelDetails } = indiHotelInfoSlice.actions;
