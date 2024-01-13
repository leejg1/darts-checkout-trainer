import "./Trebles.css";

function Trebles({ numbers, onNumberClick }) {
  return (
    <div className="trebles">
      {numbers.map((num) => (
        <button
          key={num}
          data-section_value={num * 3}
          data-section_display_value={"T" + num}
          onClick={(e) => onNumberClick(e)}
        ></button>
      ))}
    </div>
  );
}

export default Trebles;
