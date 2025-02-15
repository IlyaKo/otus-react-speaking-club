import { useNavigate, useParams } from "react-router";
import { RootState } from "../../data/store";
import { useSelector } from "react-redux";
import SessionButtons from "../../components/SessionButtons/SessionButtons";
import { formatDate } from "../../utils/formatDate";

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
      <div className="mx-2">
        <h2>{session.topic}</h2>
        <p className="text-muted">{formatDate(session.date)}</p>
        <SessionButtons session={session} />
        <p className="mt-2 fs-4">
          {`Participants (${session.participants.length} of ${session.maxParticipants}):`}
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
      </div>
    </div>
  );
}
