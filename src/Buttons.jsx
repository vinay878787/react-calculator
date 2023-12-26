import React from "react";
import Container from "./Container";
import App from "./App"

function Buttons({ value, onclick }) {

  const handleButtonClick = () => {
    console.log(value);
    onclick(value);
  };

  return (
    <Container>
      <button className="btn" onClick={handleButtonClick}>
        {value}
      </button>
    </Container>
  );
}

export default Buttons;