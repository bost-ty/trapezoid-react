import React, { useState, useEffect } from "react";
import { FaCalculator, FaUndoAlt } from "react-icons/fa";

// eslint-disable-next-line
function Result({ number, units }) {
  return <span>{` ${number} ${units} `}</span>;
}

export default function Calculator() {
  // const initialUnits = "in";
  // const [units, setUnits] = useState(initialUnits);

  const initialLongBase = 3;
  const [longBase, setLongBase] = useState(initialLongBase);

  const initialShortBase = 3;
  const [shortBase, setShortBase] = useState(initialShortBase);

  const initialDesiredHeight = 2;
  const [desiredHeight, setDesiredHeight] = useState(initialDesiredHeight);

  const initialLegLength = 2;
  const [legLength, setLegLength] = useState(initialLegLength);

  useEffect(calculateLegLength, [longBase, shortBase, desiredHeight]);

  function calculateLegLength() {
    const newBase = longBase - shortBase;
    const newLegLength = Math.sqrt(Math.pow(newBase, 2) + Math.pow(desiredHeight, 2));
    setLegLength(Math.round((newLegLength + Number.EPSILON) * 100) / 100);
  }

  return (
    <article id="calculator">
      <form onSubmit={handleSubmit} onChange={handleFormChange}>
        <label htmlFor="longBase">Long base:</label>
        <input
          type="number"
          min=".01"
          step=".01"
          id="longBase"
          name="longBase"
          value={longBase}
          onChange={(e) => setLongBase(e.target.value)}
        />
        <label htmlFor="shortBase">Short base:</label>
        <input
          type="number"
          step=".01"
          min=".01"
          id="shortBase"
          name="shortBase"
          value={shortBase}
          onChange={(e) => setShortBase(e.target.value)}
        />
        <label htmlFor="desiredHeight">Desired height:</label>
        <input
          type="number"
          step=".01"
          min=".01"
          id="desiredHeight"
          name="desiredHeight"
          value={desiredHeight}
          onChange={(e) => setDesiredHeight(e.target.value)}
        />
        <label htmlFor="legLength">Leg length:</label>
        <input
          type="number"
          step=".01"
          min=".01"
          id="legLength"
          name="legLength"
          value={legLength}
          onChange={(e) => setLegLength(e.target.value)}
        />
        <div className="form-control-container">
          <button type="submit" className="form-control" name="submit" onClick={handleSubmit}>
            <FaCalculator />
          </button>
          <button name="reset" className="form-control" onClick={handleReset}>
            <FaUndoAlt />
          </button>
        </div>
      </form>
    </article>
  );

  function handleSubmit(e) {
    e.preventDefault();
    handleFormChange(e);
  }

  function handleFormChange(e) {
    if (legLength !== 0) calculateLegLength();
  }

  function handleReset() {
    setDesiredHeight(initialDesiredHeight);
    setLegLength(initialLegLength);
    setLongBase(initialLongBase);
    setShortBase(initialShortBase);
  }
}
