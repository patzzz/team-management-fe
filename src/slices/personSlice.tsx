// LIBRARIES
import { createSlice } from "@reduxjs/toolkit";

// MISC
import { IPerson } from "models/interfaces";

// REDUX
import { getAllPersons, getPersonsByAvailabilityStatus } from "api/personsApi";

export interface IPersonInitialState {
  personsList: Array<IPerson>;
  isLoading: boolean;
  errorMessage: string;
}

const initialState: IPersonInitialState = {
  personsList: [],
  isLoading: false,
  errorMessage: "",
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ALL PERSONS
    builder.addCase(getAllPersons.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(getAllPersons.fulfilled, (state, action) => {
      state.isLoading = false;
      state.personsList = action.payload;
    });
    builder.addCase(getAllPersons.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });

    // GET PERSONS BY AVAILABILITY STATUS
    builder.addCase(getPersonsByAvailabilityStatus.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(
      getPersonsByAvailabilityStatus.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.personsList = action.payload;
      }
    );
    builder.addCase(
      getPersonsByAvailabilityStatus.rejected,
      (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      }
    );
  },
});

export const personsList = (state) => state.person.personsList;
export const isLoading = (state) => state.person.isLoading;
export const errorMessage = (state) => state.person.errorMessage;

export default personSlice.reducer;
