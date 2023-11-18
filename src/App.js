import React, { useState } from "react";

const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleOperation = (operator) => {
    // Validation
    if (!input1 || !input2 || isNaN(Number(input1)) || isNaN(Number(input2))) {
      setError("Invalid input. Please enter valid numbers.");
      setResult("");
      return;
    }

    // Perform operation
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    switch (operator) {
      case "+":
        setResult(`Result: ${num1 + num2}`);
        break;
      case "-":
        setResult(`Result: ${num1 - num2}`);
        break;
      case "*":
        setResult(`Result: ${num1 * num2}`);
        break;
      case "/":
        if (num2 === 0) {
          setError("Cannot divide by zero.");
          setResult("");
        } else {
          setResult(`Result: ${num1 / num2}`);
        }
        break;
      default:
        setError("Invalid operator.");
        setResult("");
    }
  };

  const clearResult = () => {
    setResult("");
    setError("");
  };

  return (
    <div>
      <div className="card">
        <h1 style={{ color: "#252525" }}>React Calculator</h1>
        <div className="inputs">
          <div>
            <input
              type="text"
              className="input1"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              placeholder="Num 1"
            />
          </div>
          <div>
            <input
              type="text"
              className="input2"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              placeholder="Num 2"
            />
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => handleOperation("+")}>
            <h1>+</h1>
          </button>
          <button onClick={() => handleOperation("-")}>
            <h1>-</h1>
          </button>
          <button onClick={() => handleOperation("*")}>
            <h1>*</h1>
          </button>
          <button onClick={() => handleOperation("/")}>
            <h1>/</h1>
          </button>
        </div>
        <div className="outputs">
          {error && <h2 style={{ color: "red" }}>{error}</h2>}
          {result && <h2 style={{ color: "green" }}>{result}</h2>}
        </div>
        <button onClick={clearResult}>Clear</button>
      </div>
    </div>
  );
};

export default App;
