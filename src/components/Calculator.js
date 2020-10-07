import React, { useState } from "react";
import { FaCalculator, FaUndoAlt } from "react-icons/fa";

export default function Calculator() {
  const initialUnits = "in";
  const [units, setUnits] = useState(initialUnits);

  const initialLongBase = 0;
  const [longBase, setLongBase] = useState(initialLongBase);

  const initialShortBase = 0;
  const [shortBase, setShortBase] = useState(initialShortBase);

  const initialDesiredHeight = 0;
  const [desiredHeight, setDesiredHeight] = useState(initialDesiredHeight);

  const initialLegLength = 0;
  const [legLength, setLegLength] = useState(initialLegLength);

  function calculateLegLength() {
    const newLegLength = Math.sqrt(
      Math.pow(longBase - shortBase, 2) + Math.pow(desiredHeight, 2)
    );
    return setLegLength(newLegLength);
  }

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
          min="0"
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
          min="0"
          id="shortBase"
          name="shortBase"
          value={shortBase}
          onChange={(e) => setShortBase(e.target.value)}
        />
        <label htmlFor="desiredHeight">Desired height:</label>
        <input
          type="number"
          step=".01"
          min="0"
          id="desiredHeight"
          name="desiredHeight"
          value={desiredHeight}
          onChange={(e) => setDesiredHeight(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
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
      <div>
        <p className="results">
          A trapezoid with bases of {longBase} {units} and {shortBase} {units}{" "}
          with a desired height of {desiredHeight} {units} will have legs that
          are {legLength} {units} long.
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
