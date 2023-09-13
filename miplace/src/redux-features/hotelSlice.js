import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotels: [],
  isFreeCancellableHotels: [],
  hasFreeParkingHotels: [],
  bothtrue: [],
  loading: false,
  error: null,
};
const FCH = (hotel) => {
  let newHotels = [...hotel];
  newHotels = hotel.filter((hotel) => hotel?.is_free_cancellable === 1);

  return newHotels;
};
const FPH = (hotel) => {
  let newHotels = [...hotel];
  newHotels = hotel.filter((hotel) => hotel?.has_free_parking === 1);

  return newHotels;
};
const bothtrueFunc = (hotel) => {
  let newHotels = [...hotel];
  newHotels = hotel.filter(
    (hotel) => hotel?.has_free_parking === 1 && hotel?.is_free_cancellable === 1
  );

  return newHotels;
};

const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    fetchHotelsStart(state) {
      state.loading = true;
    },
    fetchHotelsSuccess(state, action) {
      state.hotels = action.payload;
      state.isFreeCancellableHotels = FCH(action.payload);
      state.hasFreeParkingHotels = FPH(action.payload);
      state.bothtrue = bothtrueFunc(action.payload);
      state.loading = false;
      state.error = null;
      console.log(state.isFreeCancellableHotels);
      console.log(state.hasFreeParkingHotels);
      console.log(state.hotels);
    },
    fetchHotelsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchHotelsStart, fetchHotelsSuccess, fetchHotelsFailure } =
  hotelSlice.actions;

export default hotelSlice.reducer;
