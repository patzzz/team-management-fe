// LIBRARIES
import { createSlice } from "@reduxjs/toolkit";

// MISC
import {
  IPerson,
  IProject,
  PersonStatus,
  ProjectStatusEnum,
} from "models/interfaces";

export interface IUIInitialState {
  isLoading: Boolean;
  errorMessage: String;
  modalProps: {
    isVisible: Boolean;
    content: String;
    editMode: Boolean;
    project: IProject;
    person: IPerson;
    tabSelection: ProjectStatusEnum | PersonStatus;
  };
}

const initialState: IUIInitialState = {
  isLoading: false,
  errorMessage: "",
  modalProps: {
    isVisible: false,
    content: "dashboard",
    editMode: false,
    project: null,
    person: null,
    tabSelection: ProjectStatusEnum.PENDING,
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
