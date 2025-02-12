import { useNavigate } from "react-router";
import { Session } from "../../data/models/Session";
import { Button, Card } from "react-bootstrap";
import SessionButtons from "../SessionButtons/SessionButtons";

interface SessionListElementProps {
  session: Session;
}

const SessionListElement: React.FC<SessionListElementProps> = ({ session }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/sessions/${session.id}`);
  };

  return (
    <Card className="m-2">
      <Card.Header>{session.topic}</Card.Header>
      <Card.Body>
        <Card.Text>
          {session.date} {session.participants.length}/{session.maxParticipants}
        </Card.Text>

        <div>
          <Button variant="info" className="mx-2" onClick={handleClick}>
            open
          </Button>
          <SessionButtons session={session} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default SessionListElement;
