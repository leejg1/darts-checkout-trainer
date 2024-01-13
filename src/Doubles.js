import "./Doubles.css";

function Doubles({ numbers, onNumberClick }) {
  return (
    <div className="doubles">
      {numbers.map((num) => (
        <button
          key={num}
          data-section_value={num * 2}
          data-section_display_value={"D" + num}
          onClick={(e) => onNumberClick(e)}
        ></button>
      ))}
    </div>
  );
}

export default Doubles;
