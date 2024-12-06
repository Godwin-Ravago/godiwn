// AboutMe.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Godwin from '../assets/godwin.jpg';
const AboutMe = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={Godwin} />
            <Card.Body>
              <Card.Title>Godwin R. Ravago</Card.Title>
              <Card.Text>
              
              </Card.Text>
              <Button variant="primary">Contact Me</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <h2>About Me</h2>
          <p>
          Hello! My name is Godwin R. Ravago, and I am currently a student at Naga College Foundation Inc. pursuing a degree in Bachelor of Science in Information System. I have always been passionate about Web Development, and I am excited to deepen my knowledge and skills in this area.
          </p>
          <h3>Skills</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Familiarity with Emerging Technologies</li>
            
        
          </ul>
          
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;