import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.uid = action.payload;
    },
    logout: (state) => {
      return {};
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
