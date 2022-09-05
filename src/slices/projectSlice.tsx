// LIBRARIES
import { createSlice } from "@reduxjs/toolkit";

export interface IProjectInitialState {}

const initialState: IProjectInitialState = {};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getUsers.pending, (state, action) => {});
  },
});

export default projectSlice.reducer;
