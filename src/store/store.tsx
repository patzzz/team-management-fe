// LIBRARIES
import { configureStore } from "@reduxjs/toolkit";

// REDUX
import calendarSlice from "slices/calendarSlice";
import projectSlice from "slices/projectSlice";
import sessionSlice from "slices/sessionSlice";
import statisticsSlice from "slices/statisticsSlice";

const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    project: projectSlice,
    session: sessionSlice,
    statistics: statisticsSlice,
    // for adding new reducers type name and reducer here, as it follows: "reducerName": reducerFile
  },
});

export default store;
