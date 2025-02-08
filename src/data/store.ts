import { configureStore } from "@reduxjs/toolkit";
import sessionsReducer from "./sessions";
import usersReducer from "./users";

const store = configureStore({
  reducer: {
    sesions: sessionsReducer,
    users: usersReducer,
  },
});

export default store;
