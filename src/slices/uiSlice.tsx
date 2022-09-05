// LIBRARIES
import { createSlice } from "@reduxjs/toolkit";

export interface IUIInitialState {
  isLoading: Boolean;
  errorMessage: String;
  modalProps: {
    isVisible: Boolean;
    content: String;
  };
}

const initialState: IUIInitialState = {
  isLoading: false,
  errorMessage: "",
  modalProps: {
    isVisible: false,
    content: "DASHBOARD",
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleModalState: (state, action) => {
      state.modalProps = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const modalProps = (state) => state.ui.modalProps;

export const { toggleModalState } = uiSlice.actions;

export default uiSlice.reducer;
