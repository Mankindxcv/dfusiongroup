
import { Card, Col, Container, Row } from "react-bootstrap";
import "../Styles/global.css"; // Ensure this file is imported

import { Typography } from "@mui/material";

const DFGServices = () => {
  return (
    <div className="services-section">
      <Typography variant="h2" className="services-title text-danger">
        Our Services
      </Typography>


      {/* Card Section */}
      <Container className="mt-4">
          <Row className="g-4">
            <Col md={4}>
              <Card className="text-center shadow-lg">
                <Card.Body>
                  <Card.Title>Expert Security Team</Card.Title>
                  <Card.Text>
                    Our professionals are trained to handle any security challenge effectively and efficiently.
                  </Card.Text>
                  <button className="btn btn-danger">Learn More</button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow-lg">
                <Card.Body>
                  <Card.Title>24/7 Surveillance</Card.Title>
                  <Card.Text>
                    We provide round-the-clock monitoring to ensure your safety and security at all times.
                  </Card.Text>
                  <button className="btn btn-danger">Learn More</button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow-lg">
                <Card.Body>
                  <Card.Title>Advanced Technology</Card.Title>
                  <Card.Text>
                    Utilizing cutting-edge security systems to safeguard your assets and premises.
                  </Card.Text>
                  <button className="btn btn-danger">Learn More</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>
  );
};

export default DFGServices;
