import React from "react";
import "./assets/normalize.css";
import "./App.css";

import Calculator from "./Calculator";
import { FaGithub, FaQuestionCircle } from "react-icons/fa";

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

function About() {
  return (
    <article id="about">
      <h2>About</h2>
    </article>
  );
}

export default App;
