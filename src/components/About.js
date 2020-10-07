import React from "react";

export default function About() {
  return (
    <article id="about">
      <h2>About</h2>
      <p>
        Created with <code>npx create-react-app</code>. To run locally, clone
        this repository, <code>cd</code> into the directory, and run{" "}
        <code>npm start</code> for a local development server.
      </p>
      <p>
        This project is a continuation of a Python3 program{" "}
        <code>trapezoid.py</code> that was converted into a vanilla JavaScript
        file <code>trapezoid.js</code>, and has now been converted again into a
        much nicer and more useful interface as <code>trapezoid-react</code>.
      </p>
      <p>No, this isn't a great use case for React!</p>
    </article>
  );
}