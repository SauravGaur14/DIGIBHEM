import { createSlice } from "@reduxjs/toolkit";

let date = new Date();
const initialState = {
  userName: "",
  roomType: "",
  checkinDate: date.toISOString(),
  checkoutDate: date.toISOString(),

  totalPersons: 1,
  amenities: {
    locker: false,
    ac: false,
  },
  roomCost: 0,
  amenitiesCost: 0,
  additionalCharges: 0,
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
    updateCheckin(state, action) {
      state.checkinDate = action.payload;
    },
    updateCheckout(state, action) {
      state.checkoutDate = action.payload;
    },
    toggleAc(state, action) {
      state.amenities.ac = action.payload;
    },
    toggleLocker(state, action) {
      state.amenities.locker = action.payload;
    },
    setRoomType(state, action) {
      state.roomType = action.payload;
    },
    setRoomCost(state, action) {
      state.roomCost = action.payload;
    },
    setAmenitiesCost(state, action) {
      state.amenitiesCost = action.payload;
    },
    setAdditionalCharges(state, action) {
      state.additionalCharges = action.payload;
    },
    setTotalCost(state, action) {
      state.totalCost = action.payload;
    },
    setAdvance(state, action) {
      state.advance = action.payload;
      state.balance = state.totalCost - action.payload;
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
  setRoomType,
  setRoomCost,
  setAmenitiesCost,
  setTotalCost,
  setAdvance,
  setBalance,
  updateCheckin,
  updateCheckout,
  setAdditionalCharges,
} = dataSlice.actions;

export default dataSlice.reducer;
