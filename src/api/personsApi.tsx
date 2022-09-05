// LIBRARIES
import { createAsyncThunk } from "@reduxjs/toolkit";

// MISC
import { REST } from "config/axiosConfig";

export const getAllPersons = createAsyncThunk(
  "persons/getAllPersons",
  async (_, { rejectWithValue }) => {
    try {
      const response = await REST.get("/person/all");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
