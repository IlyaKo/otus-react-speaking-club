import { configureStore } from "@reduxjs/toolkit";
import sessionsReducer from "./sessions";
import usersReducer from "./users";

const store = configureStore({
  reducer: {
    sessions: sessionsReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
