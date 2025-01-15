// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import holidayReducer from "./redux/holidayReducer";

const store = configureStore({
  reducer: {
    holidays: holidayReducer, // This will manage the holidays state
  },
});

export default store;
