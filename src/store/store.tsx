// LIBRARIES
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

// REDUX
import projectSlice from "slices/projectSlice";
import sessionSlice from "slices/sessionSlice";
import statisticsSlice from "slices/statisticsSlice";
import uiSlice from "slices/uiSlice";
import personSlice from "slices/personSlice";

const reducers = combineReducers({
  project: projectSlice,
  session: sessionSlice,
  statistics: statisticsSlice,
  person: personSlice,
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

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
