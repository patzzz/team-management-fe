// LIBRARIES
import { getStatistics } from "api/statisticsApi";
import { createSlice } from "@reduxjs/toolkit";
import { IPerson, IProject } from "models/interfaces";

export interface IStatisticsInitialState {
  noOfProjectsInProgress: number;
  noOfProjectsPending: number;
  noOfProjectsDone: number;
  noOfAvailablePersons: number;
  projectDeadlines: Array<IProject>;
  projectStartDates: Array<IProject>;
  availablePersons: Array<IPerson>;
  isLoading: boolean;
  errorMessage: string;
}

const initialState: IStatisticsInitialState = {
  noOfProjectsInProgress: 0,
  noOfProjectsPending: 0,
  noOfProjectsDone: 0,
  noOfAvailablePersons: 0,
  projectDeadlines: [],
  projectStartDates: [],
  availablePersons: [],
  isLoading: false,
  errorMessage: "",
};

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStatistics.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(getStatistics.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("PAYLOAD:", action.payload);
    });
    builder.addCase(getStatistics.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });
  },
});

export default statisticsSlice.reducer;
