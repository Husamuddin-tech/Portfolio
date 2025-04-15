import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="husamuddin-tech"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      <p
        style={{
          color: "red",
          textAlign: "center",
          fontSize: "0.9em",
          marginTop: "10px",
          border: "1px solid red",
          width: "fit-content",
        }}
      >
        Disclaimer: My old Github Account was having some issues, So I created
        new one.
      </p>
    </Row>
  );
}

export default Github;
