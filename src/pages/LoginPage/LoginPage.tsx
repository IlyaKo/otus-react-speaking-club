import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { login } from "../../data/auth";
import { User } from "../../data/models/User";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.users.data);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    setValidated(true);
    if (form.checkValidity() === true) {
      setError("");
      const normalizedUsername = username.trim().toLowerCase();
      const user = users.find(
        (user: User) =>
          user.name.trim().toLowerCase() === normalizedUsername &&
          user.password === password
      );
      if (user) {
        dispatch(login(user));
        navigate("/sessions");
      } else {
        setError("Invalid username or password");
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
      {error && <p className="text-danger">{error}</p>}
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}
