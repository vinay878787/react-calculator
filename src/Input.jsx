import React from "react";
import Buttons from "./Buttons";
import App from "./App";

function Input({ value }) {
  return (
    <div>
      <input type="text" className="input" value={value} readOnly />
    </div>
  );
}

export default Input;
