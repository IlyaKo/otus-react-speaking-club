import { useSelector } from "react-redux";
import SessionListElement from "../../components/SessionListElement/SessionListElement";
import { RootState } from "../../data/store";

export default function SessionList() {
  const sessions = useSelector((state: RootState) => state.sessions.data);
  const sortedSessions = [...sessions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div>
      <div>
        {sortedSessions.map((session) => (
          <SessionListElement key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
}
