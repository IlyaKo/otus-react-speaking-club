import { configureStore } from "@reduxjs/toolkit";
import sessionsReducer from "./sessions";
import usersReducer from "./users";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    sessions: sessionsReducer,
    users: usersReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
