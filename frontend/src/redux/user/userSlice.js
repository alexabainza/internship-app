import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};
const userSlice = createSlice({
  //set a name
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    updateCompanyStart: (state) => {
      state.loading = true;
    },
    updateCompanySuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateCompanyFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    postingStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    postingSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    postingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  logout,
  updateCompanyFailure,
  updateCompanyStart,
  updateCompanySuccess,
  postingFailure,
  postingStart,
  postingSuccess,
} = userSlice.actions;

export default userSlice.reducer;
