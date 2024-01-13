import "./Bullseye.css";

function Bullseye({ onNumberClick }) {
  return (
    <div className="semi-and-bull-container">
      <button
        className="semi"
        data-section_value={25}
        data-section_display_value={25}
        onClick={(e) => onNumberClick(e)}
      ></button>
      <button
        className="bull"
        data-section_value={50}
        data-section_display_value={"Bull"}
        onClick={(e) => onNumberClick(e)}
      ></button>
    </div>
  );
}

export default Bullseye;
