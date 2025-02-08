import { Participant } from "./Participant";

export interface Session {
  id: number;
  topic: string;
  date: string;
  maxParticipants: number;
  participants: Participant[];
}
