import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./models/User";

interface UsersState {
  data: User[];
  error: string;
}

const initialState: UsersState = {
  data: [
    {
      id: 1,
      name: "Ilya",
      password: "pass123",
    },
    {
      id: 2,
      name: "Jane",
      password: "pass123",
    },
    {
      id: 3,
      name: "John",
      password: "pass123",
    },
    {
      id: 4,
      name: "Alice",
      password: "pass123",
    },
    {
      id: 5,
      name: "Bob",
      password: "pass123",
    },
    {
      id: 6,
      name: "Charlie",
      password: "pass123",
    },
    {
      id: 7,
      name: "David",
      password: "pass123",
    },
    {
      id: 8,
      name: "Eve",
      password: "pass123",
    },
  ],
  error: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const userExists = state.data.some(
        (user) => user.name === action.payload.name
      );
      if (!userExists) {
        const user = action.payload;
        if (user.id === 0) {
          user.id = Math.max(...state.data.map((o) => o.id), 0) + 1;
        }
        state.data.push(user);
      } else {
        state.error = "User with this name already exists";
      }
    },
    clearUsersError: (state) => {
      state.error = "";
    },
  },
});

export const { addUser, clearUsersError } = usersSlice.actions;
export default usersSlice.reducer;
