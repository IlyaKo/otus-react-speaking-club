import { useNavigate } from "react-router";
import { Session } from "../../data/models/Session";

interface SessionListElementProps {
  session: Session;
}

const SessionListElement: React.FC<SessionListElementProps> = ({ session }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/sessions/${session.id}`);
  };

  return (
    <div className="m-2" onClick={handleClick} style={{ cursor: "pointer" }}>
      <p>
        {session.date} <br />
        {session.topic} <br />
        {session.participants.length}/{session.maxParticipants}
      </p>
    </div>
  );
};

export default SessionListElement;
