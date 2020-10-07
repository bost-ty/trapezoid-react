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
    <div className="App" onClick={(e) => (showAbout ? toggleHidden() : null)}>
      <Header toggleHidden={toggleHidden} />
      <Calculator />
      {<About showAbout={showAbout} />}
    </div>
  );
}

export default App;
