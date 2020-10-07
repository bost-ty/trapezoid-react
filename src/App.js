import React, { useState } from "react";
import "./assets/normalize.css";
import "./App.css";

import Calculator from "./components/Calculator";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  const [showAbout, setShowAbout] = useState(false);
  function toggleHidden() {
    setShowAbout(!showAbout);
  }
  return (
    <div className="App">
      <Header toggleHidden={toggleHidden} />
      <Calculator />
      <p>{showAbout ? "true" : "false"}</p>
      {<About showAbout={showAbout} />}
    </div>
  );
}

export default App;
