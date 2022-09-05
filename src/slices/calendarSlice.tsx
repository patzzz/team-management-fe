// LIBRARIES
import { createSlice } from "@reduxjs/toolkit";

export interface ICalendarInitialState {}

const initialState: ICalendarInitialState = {};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getUsers.pending, (state, action) => {});
  },
});

export default calendarSlice.reducer;
