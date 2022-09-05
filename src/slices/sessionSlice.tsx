// LIBRARIES
import { createSlice } from "@reduxjs/toolkit";

export interface ISessionInitialState {}

const initialState: ISessionInitialState = {};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getUsers.pending, (state, action) => {});
  },
});

export default sessionSlice.reducer;
