// LIBRARIES
import { createAsyncThunk } from "@reduxjs/toolkit";

// MISC
import { REST } from "config/axiosConfig";
import { IProject, ProjectStatusEnum } from "models/interfaces";

export const createProject = createAsyncThunk(
  "project/createProject",
  async (project: IProject, { rejectWithValue }) => {
    try {
      const response = await REST.post("/project", project);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getProject = createAsyncThunk(
  "project/getProject",
  async (projectId: number, { rejectWithValue }) => {
    try {
      const response = await REST.get(`/project?projectId=${projectId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const editProject = createAsyncThunk(
  "project/editProject",
  async (project: IProject, { rejectWithValue }) => {
    try {
      const response = await REST.put(
        `/project?projectId=${project.id}`,
        project
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "project/deleteProject",
  async (projectId: number, { rejectWithValue }) => {
    try {
      const response = await REST.delete(`/project?projectId=${projectId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAllProjects = createAsyncThunk(
  "project/getAllProjects",
  async (_, { rejectWithValue }) => {
    try {
      const response = await REST.get("/project/all");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getProjectsByStatus = createAsyncThunk(
  "project/getProjectsByStatus",
  async (status: ProjectStatusEnum, { rejectWithValue }) => {
    try {
      const response = await REST.get(
        `project/getProjectByStatus?status=${status}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getProjectTeam = createAsyncThunk(
  "project/getProjectTeam",
  async (projectId: number, { rejectWithValue }) => {
    try {
      const response = await REST.get(
        `/project/getAssignedPersons?projectId=${projectId}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
