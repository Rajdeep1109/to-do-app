import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  holidays: [],
  error: null,
};

const holidaySlice = createSlice({
  name: "holidays",
  initialState,
  reducers: {
    // Set loading state when the API call is in progress
    fetchHolidaysStart: (state) => {
      state.loading = true;
    },
    // Set the holidays data to the state after successful API call
    fetchHolidaysSuccess: (state, action) => {
      state.loading = false;
      state.holidays = action.payload;
    },
    // Set error state if the API call fails
    fetchHolidaysFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions to dispatch from components
export const {
  fetchHolidaysStart,
  fetchHolidaysSuccess,
  fetchHolidaysFailure,
} = holidaySlice.actions;
export default holidaySlice.reducer;
