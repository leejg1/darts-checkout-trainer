import Doubles from "./Doubles";
import Singles from "./Singles";
import Trebles from "./Trebles";
import Bullseye from "./Bullseye";
import "./Board.css";

function Board({ onNumberClick, onUndoClick }) {
  const numbers = [
    20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5,
  ];
  return (
    <div className="board-outer-container">
      <div className="board-inner-container">
        <Doubles numbers={numbers} onNumberClick={onNumberClick} />
        <Singles numbers={numbers} onNumberClick={onNumberClick} />
        <Trebles numbers={numbers} onNumberClick={onNumberClick} />
        <Bullseye onNumberClick={onNumberClick} />
        <button className="undo-button" onClick={onUndoClick}>
          <img
            src={process.env.PUBLIC_URL + "/icons8-undo-96.png"}
            alt="Undo"
          />
        </button>
      </div>
    </div>
  );
}

export default Board;
