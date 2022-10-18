import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>Copyright &copy; Real Estate {new Date().getFullYear()}</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
