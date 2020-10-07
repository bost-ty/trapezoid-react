import React from "react";

export default function About({ showAbout }) {
  return (
    <article
      id="about"
      className={showAbout ? null : "hidden"}
      aria-hidden={!showAbout}
    >
      <h2>About</h2>
      <p>
        This project is a continuation of a Python3 program{" "}
        <code>trapezoid.py</code> that was converted into a vanilla JavaScript
        file <code>trapezoid.js</code>, and has now been converted again into{" "}
        <code>trapezoid-react</code>.
      </p>
    </article>
  );
}
