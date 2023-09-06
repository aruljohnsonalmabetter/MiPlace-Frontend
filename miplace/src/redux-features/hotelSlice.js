
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotels: {},
  loading: false,
  error: null,
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
      state.loading = false;
      state.error = null;
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
