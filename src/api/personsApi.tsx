// LIBRARIES
import { createAsyncThunk } from "@reduxjs/toolkit";

// MISC
import { REST } from "config/axiosConfig";
import { IPerson } from "models/interfaces";

export const createPerson = createAsyncThunk(
  "person/createPerson",
  async (person: IPerson, { rejectWithValue }) => {
    try {
      const response = await REST.post("/person", person);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPerson = createAsyncThunk(
  "person/getPerson",
  async (personId: number, { rejectWithValue }) => {
    try {
      const response = await REST.get(`person?personId=${personId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const editPerson = createAsyncThunk(
  "person/editPerson",
  async (person: IPerson, { rejectWithValue }) => {
    try {
      const response = await REST.put(`/person?personId=${person.id}`, person);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "project/deleteProject",
  async (personId: number, { rejectWithValue }) => {
    try {
      const response = await REST.delete(`/person?personId=${personId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAllPersons = createAsyncThunk(
  "person/getAllPersons",
  async (_, { rejectWithValue }) => {
    try {
      const response = await REST.get("/person/all");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPersonProjects = createAsyncThunk(
  "person/getPersonProjects",
  async (personId: number, { rejectWithValue }) => {
    try {
      const response = await REST.get(
        `/person/getAssignedProjects?personId=${personId}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const assignOrUnassignPerson = createAsyncThunk(
  "person/assignOrUnassignPerson",
  async (personId: number, { rejectWithValue }) => {
    try {
      const response = await REST.get(
        `/person/getAssignedProjects?personId=${personId}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
