import { configureStore } from "@reduxjs/toolkit";
import hotelSlice from "../redux-features/hotelSlice";
import userSlice from "../redux-features/userSlice";
// We will import all the individual slices here

const store = configureStore({
  reducer: {
    hotelFeature: hotelSlice,
    userFeature: userSlice,
  },
});

export default store;
