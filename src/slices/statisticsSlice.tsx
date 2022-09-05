// LIBRARIES
import { createSlice } from "@reduxjs/toolkit";

export interface IStatisticsInitialState {}

const initialState: IStatisticsInitialState = {};

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getUsers.pending, (state, action) => {});
  },
});

export default statisticsSlice.reducer;
