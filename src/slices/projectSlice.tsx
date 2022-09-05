// LIBRARIES
import { createSlice } from "@reduxjs/toolkit";

// MISC
import { IProject } from "models/interfaces";

// API
import { createProject, getProject } from "api/projectApi";

export interface IProjectInitialState {
  projects: Array<IProject>;
  project: IProject;
  isLoading: boolean;
  errorMessage: string;
}

const initialState: IProjectInitialState = {
  projects: [],
  project: {
    id: 0,
    title: "",
    description: "",
    status: "",
    startDate: new Date(),
    endDate: new Date(),
    deadline: new Date(),
  },
  isLoading: false,
  errorMessage: "",
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // CREATE PROJECT
    builder.addCase(createProject.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(createProject.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(createProject.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });

    // GET PROJECT
    builder.addCase(getProject.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(getProject.fulfilled, (state, action) => {
      state.isLoading = false;
      state.project = action.payload;
    });
    builder.addCase(getProject.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });
  },
});

export const projects = (state) => state.project.projects;

export default projectSlice.reducer;
