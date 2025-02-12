import Button from "react-bootstrap/esm/Button";
import { Session } from "../../data/models/Session";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { addUserToSession } from "../../data/sessions";

interface JoinSessionButtonProps {
  session: Session;
}

const JoinSessionButton: React.FC<JoinSessionButtonProps> = ({ session }) => {
  const dispatch = useDispatch();
  const { authenticated, user } = useSelector((state: RootState) => state.auth);
  const canJoin =
    authenticated &&
    session.maxParticipants > session.participants.length &&
    !session.participants.find((participant) => participant.userId == user?.id);

  const handleClick = () => {
    dispatch(addUserToSession({ sessionId: session.id, user: user! }));
  };

  return (
    <Button variant="primary" disabled={!canJoin} onClick={handleClick}>
      join
    </Button>
  );
};

export default JoinSessionButton;
