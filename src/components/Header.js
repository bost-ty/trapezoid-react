import React from "react";
import { FaGithub, FaQuestionCircle } from "react-icons/fa";

export default function Header({ toggleHidden }) {
  return (
    <header>
      <h1>trapezoid.jsx</h1>
      <p>a small app for calculating neat trapezoids</p>
      <ul>
        <li>
          <a href="https://github.com/bost-ty/trapezoid-react">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleHidden}>
            <FaQuestionCircle />
          </a>
        </li>
      </ul>
    </header>
  );
}
