import { useState } from "react";
import Input from "./Input";
import "./App.css";
import Buttons from "./Buttons";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState("");

  const handleClick = (value) => {
    if (value === "DEL") {
      setHistory((prev) => prev.slice(0, -1));
    } else if (value === "CE") {
      setHistory("");
    }
    else if(value==="="){
      console.log(history);
      let result = eval(history)
      setHistory(result);
    }
    
    else {
      setInputValue(value);
      setHistory((prev) => prev.toString() + value.toString());
    }
  };

  return (
    <div className="app-container">
      <h1>Calculator</h1>
      <Input value={history} />
      <div className="container">
        <div>
          <Buttons value={7} onclick={handleClick} />
          <Buttons value={4} onclick={handleClick} />
          <Buttons value={1} onclick={handleClick} />
          <Buttons value="DEL" onclick={handleClick} />
        </div>
        <div>
          <Buttons value={8} onclick={handleClick} />
          <Buttons value={5} onclick={handleClick} />
          <Buttons value={2} onclick={handleClick} />
          <Buttons value={0} onclick={handleClick} />
        </div>
        <div>
          <Buttons value={9} onclick={handleClick} />
          <Buttons value={6} onclick={handleClick} />
          <Buttons value={3} onclick={handleClick} />
          <Buttons value="CE" onclick={handleClick} />
        </div>
        <div>
          <Buttons value="+" onclick={handleClick} />
          <Buttons value="-" onclick={handleClick} />
          <Buttons value="*" onclick={handleClick} />
          <Buttons value="/" onclick={handleClick} />
        </div>
        <Buttons value="%" onclick={handleClick} />
        <Buttons value="mod" onclick={handleClick} />
        <Buttons value="." onclick={handleClick} />
        <Buttons value="=" onclick={handleClick} />
      </div>
    </div>
  );
}

export default App;
