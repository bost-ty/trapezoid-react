import React, { useState } from "react";
import "./assets/normalize.css";
import "./App.css";

import { FaCalculator, FaGithub, FaQuestionCircle } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Header />
      <Calculator />
      <About />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>trapezoid.jsx</h1>
      <p>a small app for calculating trapezoids</p>
      <ul>
        <li>
          <a href="https://github.com/bost-ty/trapezoid-react">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="#about">
            <FaQuestionCircle />
          </a>
        </li>
      </ul>
    </header>
  );
}

function Calculator() {
  const [longBase, setLongBase] = useState(0);
  const [shortBase, setShortBase] = useState(0);

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleSubmit}>
        <label>
          Long base:
          <input
            type="text"
            name="longBase"
            value={longBase}
            onChange={(e) => setLongBase(e.target.value)}
          />
        </label>
        <label>
          Short base:
          <input
            type="text"
            name="shortBase"
            value={shortBase}
            onChange={(e) => setShortBase(e.target.value)}
          />
        </label>
        <button type="submit" name="submit">
          <FaCalculator className="fa-calc" />
        </button>
      </form>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    handleFormChange(e);
  }

  function handleFormChange(e) {
    console.log("Form change" + " " + e.target.name);
  }
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

export default App;
