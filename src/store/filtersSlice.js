import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  sortBy: "date",
  startDate: "",
  endDate: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setTextFilter: (state, action) => {
      state.text = action.payload;
    },
    sortByDate: (state) => {
      state.sortBy = "date";
    },
    sortByAmount: (state) => {
      state.sortBy = "amount";
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

export const {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} = filtersSlice.actions;

export default filtersSlice.reducer;
