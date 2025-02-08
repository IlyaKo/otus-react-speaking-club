import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { Session } from "./models/Session";
import { User } from "./models/User";

interface SessionsState {
  data: Session[];
  error: string;
}

const initialSessionsState: SessionsState = {
  data: [
    {
      id: 1,
      topic: "Greetings",
      date: "2025-03-03",
      participants: [],
      maxParticipants: 4,
    },
    {
      id: 2,
      topic: "Travel",
      date: "2023-03-02",
      participants: [],
      maxParticipants: 5,
    },
    {
      id: 3,
      topic: "Different Cultures",
      date: "2023-03-01",
      participants: [],
      maxParticipants: 4,
    },
  ],
  error: "",
};

const sessionsSlice = createSlice({
  name: "sessions",
  initialState: initialSessionsState,
  reducers: {
    addUserToSession: (
      state,
      action: PayloadAction<{ sessionId: number; user: User }>
    ) => {
      const { sessionId, user } = action.payload;
      const session = state.data.find((session) => session.id === sessionId);
      if (session && session.participants.length < session.maxParticipants) {
        session.participants.push({ userId: user.id, name: user.name });
      } else if (session) {
        state.error = "Session is full";
      } else {
        state.error = "Session not found";
      }
    },
    clearSessionsError: (state) => {
      state.error = "";
    },
  },
});

export const { addUserToSession, clearSessionsError } = sessionsSlice.actions;
export default sessionsSlice.reducer;
