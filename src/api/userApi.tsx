// LIBRARIES
import { createAsyncThunk } from "@reduxjs/toolkit";

// MISC
import { REST } from "config/axiosConfig";

// This function receives params within async (param)
const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await REST.get("/users?page=1");
  return response.data.data;
});

const getUserById = createAsyncThunk("users/getUsersById", async (userId) => {
  const response = await REST.get(`/users/${userId}`);
  return response.data.data;
});

export { getUsers, getUserById };
