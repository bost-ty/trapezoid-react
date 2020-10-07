import React from "react";
import "./assets/normalize.css";
import "./App.css";

import Calculator from "./components/Calculator";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Calculator />
      <About />
    </div>
  );
}

export default App;
