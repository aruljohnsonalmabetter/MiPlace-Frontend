import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  phoneNumber: "",
  address: "",
  favHotel: [],
  bookedHotel: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userName = action.payload.userName;
      state.phoneNumber = action.payload.phoneNumber;
      state.address = action.payload.address;
    },
    addFavHotel: (state, action) => {
      state.favHotel.push(action.payload);
    },
    bookHotel: (state, action) => {
      state.bookedHotel = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { addUser, addFavHotel ,bookHotel} = userSlice.actions;
