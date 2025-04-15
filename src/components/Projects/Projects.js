import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatbot from "../../Assets/Projects/chatbot.png";
import realestate from "../../Assets/Projects/realestate.png";
import crypto from "../../Assets/Projects/crypto.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              title="AI Chatbot Prototype"
              description="Built with HTML, CSS, JS and powered by OpenAI, LangChain, Gradio, PlayHT, Hugging Face, and Google Colab. 
              Delivers conversational AI with voice and multi-modal support.
              Note: Some features may not work due to expired free API trials."
              ghLink="https://github.com/Husamuddin-tech/AI-Chatbot-Prototype.git"
              demoLink="https://husamsearchbot.ccbp.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realestate}
              title="Real Estate Demo Website"
              description="A static website built with HTML and CSS, designed to showcase a real estate platform concept. 
              Features property listings, key highlights, and a clean layout to simulate a user-friendly browsing experience. 
              Ideal for demonstrating visual structure"
              ghLink="https://github.com/Husamuddin-tech/Static-Website.git"
              demoLink="https://husamvilla.ccbp.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              title="Cryptocurrency Tracker"
              description="In this project, 
              A web application built using React to display cryptocurrency data. 
              It applies key frontend concepts like component-based architecture, props, state management, and API integration to fetch and present price, rank, and market information for various cryptocurrencies. 
              While it doesn’t offer live price tracking, it provides a snapshot view of the market, 
              ideal for learning how to structure and style dynamic data in a React environment."
              ghLink="https://github.com/Husamuddin-tech/Crypto-Tracker.git"
              demoLink="https://husamcointrack.ccbp.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
