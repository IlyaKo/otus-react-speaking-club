import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { User } from "./models/User";

interface AuthState {
  authenticated: boolean;
  user: User | null;
}

const initialAuthState: AuthState = {
  authenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.authenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.authenticated = initialAuthState.authenticated;
      state.user = initialAuthState.user;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
