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
        This project is a continuation of a Python program written for a
        woodworking project. It has been converted to{" "}
        <a href="https://github.com/bost-ty/trapezoid">vanilla JavaScript</a>{" "}
        already. This is the newest version, <code>trapezoid-react</code>.
      </p>
    </article>
  );
}
