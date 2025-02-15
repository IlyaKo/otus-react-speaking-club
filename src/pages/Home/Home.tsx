import logoImage from "../../assets/big-logo.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function Home() {
  return (
    <div>
      <Row>
        <Col lg={9} className="fs-4">
          <p>
            Welcome to the platform to schedule and manage attendance at
            speaking club meetings, allowing you to view upcoming sessions,
            register or log in, and sign up for available spots.
          </p>
          <p>
            Our platform also provides resources for improving your speaking
            skills, connecting with other members, and tracking your progress
            over time. Join us to enhance your public speaking abilities in a
            supportive and engaging environment.
          </p>
        </Col>
        <Col lg={3} className="text-center">
          <img
            src={logoImage}
            alt="logo"
            className="img-fluid"
            style={{ maxWidth: "200px", height: "auto" }}
          />
        </Col>
      </Row>
    </div>
  );
}
