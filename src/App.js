import React from "react";
import "./assets/normalize.css";
import "./App.css";

import { FaGithub, FaQuestionCircle } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Header />
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
          <a href="https://github.com/bost-ty/trapezoid-react/ABOUT.md">
            <FaQuestionCircle />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default App;
