import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce app with product listings, cart, and payments.",
    img: "https://via.placeholder.com/400x250",
    link: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Chat App",
    description: "Real-time chat application built with React, Firebase, and Socket.io.",
    img: "https://via.placeholder.com/400x250",
    link: "https://github.com/yourusername/chat-app",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase projects and skills.",
    img: "https://via.placeholder.com/400x250",
    link: "https://github.com/yourusername/portfolio",
  },
];

const ProjectCards = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🚀 My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card className="shadow-lg h-100">
              <Card.Img variant="top" src={project.img} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button
                  variant="primary"
                  href={project.link}
                  target="_blank"
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectCards;
