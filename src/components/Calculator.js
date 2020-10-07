import React, { useState, useEffect } from "react";
import { FaCalculator, FaUndoAlt } from "react-icons/fa";

function Result({ number, units }) {
  return <span>{` ${number} ${units} `}</span>;
}

export default function Calculator() {
  const initialUnits = "in";
  const [units, setUnits] = useState(initialUnits);

  const initialLongBase = 6;
  const [longBase, setLongBase] = useState(initialLongBase);

  const initialShortBase = 3;
  const [shortBase, setShortBase] = useState(initialShortBase);

  const initialDesiredHeight = 2;
  const [desiredHeight, setDesiredHeight] = useState(initialDesiredHeight);

  const initialLegLength = 0;
  const [legLength, setLegLength] = useState(initialLegLength);

  function calculateLegLength() {
    const newBase = longBase - shortBase;
    const newLegLength = Math.sqrt(
      Math.pow(newBase, 2) + Math.pow(desiredHeight, 2)
    );
    setLegLength(newLegLength);
  }

  useEffect(calculateLegLength, [longBase, shortBase, desiredHeight]);

  return (
    <article id="calculator">
      <form onSubmit={handleSubmit} onChange={handleFormChange}>
        <label htmlFor="units">Units:</label>
        <select
          id="units"
          name="units"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
        >
          <option defaultValue value="in">
            inches
          </option>
          <option value="cm">centimeters</option>
        </select>
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: "1rem",
            minWidth: 200,
            background: "var(--blue-dark)",
            padding: "1rem",
            borderRadius: ".5em",
          }}
        >
          <button type="submit" name="submit" onClick={handleSubmit}>
            <FaCalculator className="fa-calc" />
          </button>
          <button name="reset" onClick={handleReset}>
            <FaUndoAlt className="fa-reset" />
          </button>
        </div>
      </form>
      <div className="results">
        <p>
          A trapezoid with bases of <Result number={shortBase} units={units} />
          and <Result number={longBase} units={units} />
          with a height of
          <Result number={desiredHeight} units={units} /> will be{" "}
          <Result number={legLength} units={units} />
          long.
        </p>
      </div>
    </article>
  );

  function handleSubmit(e) {
    e.preventDefault();
    handleFormChange(e);
  }

  function handleFormChange(e) {
    calculateLegLength();
  }

  function handleReset() {
    setDesiredHeight(initialDesiredHeight);
    setLegLength(initialLegLength);
    setLongBase(initialLongBase);
    setShortBase(initialShortBase);
  }
}
