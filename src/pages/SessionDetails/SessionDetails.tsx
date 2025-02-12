import { useNavigate, useParams } from "react-router";
import { RootState } from "../../data/store";
import { useSelector } from "react-redux";
import JoinSessionButton from "../../components/JoinSessionButton/JoinSessionButton";

export default function SessionDetails() {
  const { sessionId } = useParams<{ sessionId: string }>();
  const navigate = useNavigate();
  const session = useSelector((state: RootState) =>
    state.sessions.data.find((session) => session.id === Number(sessionId))
  );
  const user = useSelector((state: RootState) => state.auth.user);

  if (!session) {
    navigate("/not-found");
    return;
  }

  return (
    <div>
      <div
        className="m-2"
        onClick={() => navigate("/sessions")}
        style={{ cursor: "pointer" }}
      >
        {"<"} Back to list
      </div>
      <h2>{session.topic}</h2>
      <p>Date: {session.date}</p>
      <p>
        Participants ({session.participants.length} of {session.maxParticipants}
        ):
        <ol>
          {session.participants.map((participant) => (
            <li key={participant.userId}>
              {participant.name}
              {participant.userId === user?.id && (
                <strong>{" (it's you!)"}</strong>
              )}
            </li>
          ))}
        </ol>
      </p>
      <JoinSessionButton session={session} />
    </div>
  );
}
