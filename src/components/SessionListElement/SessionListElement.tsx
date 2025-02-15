import { useNavigate } from "react-router";
import { Session } from "../../data/models/Session";
import { Button, Card } from "react-bootstrap";
import SessionButtons from "../SessionButtons/SessionButtons";
import { formatDate } from "../../utils/formatDate";

interface SessionListElementProps {
  session: Session;
}

const SessionListElement: React.FC<SessionListElementProps> = ({ session }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/sessions/${session.id}`);
  };

  return (
    <Card className="my-2" bg="light">
      <Card.Header as="h4">{session.topic}</Card.Header>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          {formatDate(session.date)}
        </Card.Subtitle>
        <Card.Text>
          {`Spots: ${session.participants.length} / ${session.maxParticipants}`}
        </Card.Text>
        <div>
          <SessionButtons session={session} />
          <Button variant="info" className="ms-2" onClick={handleClick}>
            Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SessionListElement;
