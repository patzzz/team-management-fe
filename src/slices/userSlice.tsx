import { createSlice } from "@reduxjs/toolkit";
import { getUsers, getUserById } from "api/userApi";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    selectedUser: {},
    status: null,
    isLoading: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // getUsers
    builder.addCase(getUsers.pending, (state, action) => {});
  },
});

export const users = (state) => state.users.users;
export const selectedUser = (state) => state.users.selectedUser;
export const isLoading = (state) => state.users.isLoading;
export const errorMessage = (state) => state.users.errorMessage;

export default usersSlice.reducer;
