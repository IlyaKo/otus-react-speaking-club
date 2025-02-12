import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { User } from "./models/User";

interface AuthState {
  authenticated: boolean;
  name: string;
}

const initialAuthState: AuthState = {
  authenticated: false,
  name: "username",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      const { name } = action.payload;
      state.authenticated = true;
      state.name = name;
    },
    logout(state) {
      state.authenticated = initialAuthState.authenticated;
      state.name = initialAuthState.name;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
