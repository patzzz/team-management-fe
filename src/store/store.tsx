// LIBRARIES
import { configureStore } from "@reduxjs/toolkit";

// REDUX
import calendarSlice from "slices/calendarSlice";
import projectSlice from "slices/projectSlice";
import sessionSlice from "slices/sessionSlice";
import statisticsSlice from "slices/statisticsSlice";
import thunkMiddleware from "redux-thunk";

export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    project: projectSlice,
    session: sessionSlice,
    statistics: statisticsSlice,
    // for adding new reducers type name and reducer here, as it follows: "reducerName": reducerFile
  },
  middleware: [thunkMiddleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
