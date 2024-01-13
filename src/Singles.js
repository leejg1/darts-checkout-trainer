import "./Singles.css";

function Singles({ numbers, onNumberClick }) {
  return (
    <div className="singles">
      {numbers.map((num) => (
        <button
          key={num}
          data-section_value={num}
          data-section_display_value={num}
          onClick={(e) => onNumberClick(e)}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Singles;
