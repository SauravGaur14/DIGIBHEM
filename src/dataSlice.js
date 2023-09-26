{
  /*import { createSlice } from "@reduxjs/toolkit";

let date = new Date();
const initialState = {
  userName: "",
  roomType: "",
  checkinDate: {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  },
  checkoutDate: {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  },

  totalPersons: 1,
  ameneties: {
    locker: false,
    ac: false,
  },
  aditionalCharges: 0,
  totalCost: 0,
  advance: 0,
  balance: 0,
};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload;
    },
    updateTotalPersons(state, action) {
      state.totalPersons = action.payload;
    },
    toggleAc(state, action) {
      state.ameneties.ac = !state.ameneties.ac;
    },
    toggleLocker(state, action) {
      state.ameneties.locker = !state.ameneties.locker;
    },
  },
});

export const { toggleAc, toggleLocker, setUserName, updateTotalPersons } = dataSlice.actions;

export default dataSlice.reducer;
*/
}

import { createSlice } from "@reduxjs/toolkit";

let date = new Date();
const initialState = {
  userName: "",
  roomType: "",
  checkinDate: {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  },
  checkoutDate: {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  },

  totalPersons: 1,
  amenities: {
    locker: false,
    ac: false,
  },
  additionalCharges: 0,
  roomCost: 0,
  advance: 0,
  balance: 0,
};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload;
    },
    updateTotalPersons(state, action) {
      state.totalPersons = action.payload;
    },
    toggleAc(state) {
      state.amenities.ac = !state.amenities.ac;
    },
    toggleLocker(state) {
      state.amenities.locker = !state.amenities.locker;
    },
    setRoomCost(state, action) {
      state.roomCost = action.payload;
    },
    setAmenitiesCost(state, action) {
      state.additionalCharges = action.payload;
    },
    setTotalCost(state, action) {
      state.totalCost = action.payload;
    },
    setAdvance(state, action) {
      state.advance = action.payload;
    },
    setBalance(state, action) {
      state.balance = action.payload;
    },
  },
});

export const {
  toggleAc,
  toggleLocker,
  setUserName,
  updateTotalPersons,
  setRoomCost,
  setAmenitiesCost,
  setTotalCost,
  setAdvance,
  setBalance,
} = dataSlice.actions;

export default dataSlice.reducer;
