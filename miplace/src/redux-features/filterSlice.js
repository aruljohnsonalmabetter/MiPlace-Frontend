import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lowToHigh: true,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLowToHigh: (state, action) => {
      state.lowToHigh = true;
    //   console.log(state.lowToHigh);
    },
    sethHighToLow: (state, action) => {
      state.lowToHigh = false;
    //   console.log(state.lowToHigh);
    },
  },
});

export default filterSlice.reducer;

export const { setLowToHigh, sethHighToLow } = filterSlice.actions;
