// LIBRARIES
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

// REDUX
import calendarSlice from "slices/calendarSlice";
import projectSlice from "slices/projectSlice";
import sessionSlice from "slices/sessionSlice";
import statisticsSlice from "slices/statisticsSlice";
import uiSlice from "slices/uiSlice";

const reducers = combineReducers({
  calendar: calendarSlice,
  project: projectSlice,
  session: sessionSlice,
  statistics: statisticsSlice,
  ui: uiSlice,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
