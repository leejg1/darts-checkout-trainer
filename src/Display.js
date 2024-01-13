import { useState } from "react";
import "./Display.css";

function Display({ threeDartScores, setThreeDartScores }) {
  const [generatedCheckout, setGeneratedCheckout] = useState(() =>
    generateCheckout()
  );

  const [animated, setAnimated] = useState(null);

  function generateCheckout() {
    let num = 0;
    do {
      num = Math.floor(Math.random() * (170 - 41 + 1)) + 41;
      console.log("Target:", num);
    } while (
      num === 169 ||
      num === 168 ||
      num === 166 ||
      num === 165 ||
      num === 163 ||
      num === 162 ||
      num === 159
    );
    return num;
  }

  function handleSubmit() {
    //Check if any scores have been selected
    if (threeDartScores.length < 1) {
      console.log("Not enough elements in threeDartScores.");
      return;
    }

    //Get the combined value of all scores selected
    const userSelectedTotal = threeDartScores.reduce(
      (accumulator, currentValue) => accumulator + currentValue.calcVal,
      0
    );

    //Gets last score selected's first char to check if it is a double or bullseye (begins with "D" or "B")
    const lastDart = threeDartScores[threeDartScores.length - 1].displayVal;
    const lastDartFirstChar = lastDart.charAt(0);
    console.log(lastDartFirstChar);

    if (
      userSelectedTotal - generatedCheckout === 0 &&
      (lastDartFirstChar === "D" || lastDartFirstChar === "B")
    ) {
      setAnimated("correct");
      setTimeout(() => {
        setThreeDartScores([]);
        setGeneratedCheckout(generateCheckout());
        setAnimated(null);
      }, 1000);
    } else {
      setAnimated("wrong");
      setTimeout(() => {
        setAnimated(null);
      }, 800);
    }
  }

  return (
    <div className="display-outer-container">
      <div className="display-inner-container">
        <p>Target:</p>
        <h1>{generatedCheckout}</h1>
        <div
          className={`user-selected-scores ${
            animated === "correct" ? "correct-animated-text" : ""
          } ${animated === "wrong" ? "wrong-animated-text" : ""}`}
        >
          {threeDartScores.map((item, index) => {
            return <span key={index}>{item.displayVal}</span>;
          })}
        </div>
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Display;

/* 169, 168, 166, 165, 163, 162 and 159. */
