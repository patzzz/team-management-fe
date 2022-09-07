// LIBRARIES
import { createAsyncThunk } from "@reduxjs/toolkit";

// MISC
import { REST } from "config/axiosConfig";

export const createPerson = createAsyncThunk(
  "person/createPerson",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await REST.post("person/create", data.person);
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
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await REST.put(
        `/person/update?personId=${data.personId}`,
        data.person
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deletePerson = createAsyncThunk(
  "person/deletePerson",
  async (personId: number, { rejectWithValue }) => {
    try {
      const response = await REST.delete(`person/delete?personId=${personId}`);
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
      const response = await REST.get("person/all");
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
        `person/getAssignedProjects?personId=${personId}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const assignOrUnassignPerson = createAsyncThunk(
  "person/assignOrUnassignPerson",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await REST.post(
        `project/assignOrUnassignPerson?personId=${data.personId}&projectId=${data.projectId}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPersonsByAvailabilityStatus = createAsyncThunk(
  "person/getPersonsByAvailabilityStatus",
  async (status: string, { rejectWithValue }) => {
    try {
      const response = await REST.get(
        `person/getPersonsByAvailabilityStatus?status=${status}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
