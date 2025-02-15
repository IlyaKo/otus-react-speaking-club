import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../data/store";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { addUser } from "../../data/users";
import { login } from "../../data/auth";

export default function RegisterPage() {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state: RootState) => state.users);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    setValidated(true);
    if (form.checkValidity() === true) {
      setError("");
      if (password !== passwordConfirmation) {
        setError("Passwords do not match");
        return;
      }
      const normalizedUsername = username.trim().toLowerCase();
      const user = userState.data.find(
        (user) => user.name.trim().toLowerCase() === normalizedUsername
      );
      if (user) {
        setError("Username already exists");
        return;
      }
      const newUser = { id: 0, name: username, password };
      dispatch(addUser(newUser));
      if (!userState.error) {
        dispatch(login(newUser));
        navigate("/sessions");
      } else {
        setError(userState.error);
      }
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit} validated={validated}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Enter your name"
        />
        <Form.Control.Feedback type="invalid">
          field is required
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          type="password"
          placeholder="Your password"
        />
        <Form.Control.Feedback type="invalid">
          minimum 6 characters
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="passwordConfirmation">
        <Form.Label>Password confirmation:</Form.Label>
        <Form.Control
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
          minLength={6}
          type="password"
          placeholder="Password confirmation"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      {error && <p className="text-danger">{error}</p>}
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}
