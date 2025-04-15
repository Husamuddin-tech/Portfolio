import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Syed Husamuddin </span>
            from <span className="purple"> Hyderabad, Telengana, India.</span>
            <br />
            <br />
            I'm a Computer Science engineering student specializing in{" "}
            <span className="purple">
              {" "}
              Artificial Intelligence and Data Science{" "}
            </span>
            at Methodist College of Engineering. I'm also a fellow at NxtWave
            Disruptive Technologies, where I'm actively pursuing the{" "}
            <span className="purple"> CCBP 4.0 Certification Program </span>.
            With a strong foundation in AI, data science, and full-stack
            development, I’m building future-ready tech skills to create
            impactful, real-world solutions. My passion lies in combining
            data-driven insights with intelligent systems to drive innovation
            and solve complex challenges.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drive Cars
            </li>
            <li className="about-activity">
              <ImPointRight /> Spend Time with Family and Friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building smart solutions through AI and data."{" "}
          </p>
          <footer className="blockquote-footer">Husamuddin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
