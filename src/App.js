import Board from "./Board";
import Display from "./Display";
import "./App.css";
import { useState } from "react";

function App() {
  const [threeDartScores, setThreeDartScores] = useState([]);

  function onNumberClick(e) {
    if (threeDartScores.length < 3) {
      setThreeDartScores((prevVal) => {
        return [
          ...prevVal,
          {
            displayVal: e.target.dataset.section_display_value,
            calcVal: Number(e.target.dataset.section_value),
          },
        ];
      });
    }
  }

  function onUndoClick() {
    if (threeDartScores.length > 0) {
      setThreeDartScores((prevVal) => prevVal.slice(0, -1));
    }
  }

  return (
    <div>
      <h1 className="title">Darts Checkout Trainer</h1>
      <Board onNumberClick={onNumberClick} onUndoClick={onUndoClick} />
      <Display
        threeDartScores={threeDartScores}
        setThreeDartScores={setThreeDartScores}
      />
    </div>
  );
}

export default App;
