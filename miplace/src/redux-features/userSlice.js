import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  phoneNumber: "",
  address: "",
  // favHotel: {},
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
      // state.favHotel = action.payload;
      let exists = true;
      state.favHotel.map(function(hotel) {
        if (exists === true && hotel.hotel_id === action.payload.hotel_id) {
          exists = false;
          // break;
        }
      });
      // state.favHotel.map((hotel)=>{
      //   if(hotel.hotel_id == action.payload.hotel_id)){
      //     exists=false;
      //   }
      // });
      exists && state.favHotel.push(action.payload);
      console.log(state.favHotel);
    },
    bookHotel: (state, action) => {
      state.bookedHotel = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { addUser, addFavHotel, bookHotel } = userSlice.actions;
