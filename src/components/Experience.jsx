import React from 'react';
import data from '../data.json';
import { Card, Container } from 'react-bootstrap';
import Carousel from '@itseasy21/react-elastic-carousel';
import '../styles/Carousel.css'; // Ensure this CSS file contains necessary styles

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

export default function Projects() {
  const projects = data.projects;

  return (
    <Container className="project-container">
      <h1 className="text-center mb-4" style={{ color:'white', fontWeight: 'bolder', fontStyle: 'italic' }}>Projects</h1>
      <Carousel breakPoints={breakPoints}>
        {projects.map((project, index) => (
          <Card className="project-card" key={index}>
            <Card.Img variant="top" src={project.image} alt={`Project ${index}`} />
            <Card.Body>
              <Card.Title className="text-center">{project.name}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Carousel>
    </Container>
  );
}
