import Button from "react-bootstrap/esm/Button";
import { Session } from "../../data/models/Session";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { addUserToSession, removeUserFromSession } from "../../data/sessions";
import { ButtonGroup } from "react-bootstrap";

interface SessionButtonsProps {
  session: Session;
}

const SessionButtons: React.FC<SessionButtonsProps> = ({ session }) => {
  const dispatch = useDispatch();
  const { authenticated, user } = useSelector((state: RootState) => state.auth);
  const canJoin =
    authenticated &&
    session.maxParticipants > session.participants.length &&
    !session.participants.find((participant) => participant.userId == user?.id);
  const canLeave =
    authenticated &&
    session.participants.find((participant) => participant.userId == user?.id);

  const handleJoinClick = () => {
    dispatch(addUserToSession({ sessionId: session.id, user: user! }));
  };
  const handleLeaveClick = () => {
    dispatch(removeUserFromSession({ sessionId: session.id, user: user! }));
  };
  return (
    <ButtonGroup>
      <Button variant="primary" disabled={!canJoin} onClick={handleJoinClick}>
        Join
      </Button>
      <Button variant="danger" disabled={!canLeave} onClick={handleLeaveClick}>
        Leave
      </Button>
    </ButtonGroup>
  );
};

export default SessionButtons;
