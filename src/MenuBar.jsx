import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./MenuBar.module.css";
import question_img from "/src/assets/question-mark.png";

function MenuBar({ chosenMode, setChosenMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const itemSelected = (num) => {
    toggleDropdown();
    setChosenMode(num);
  };

  return (
    <div className={styles.container}>
      <div className={styles.dropdown_and_question}>
        <a className={styles.question_container}>
          <img className={styles.question} src={question_img} />{" "}
          <span className={styles.mode_tip}>
            <p>
              Each mode represents how many darts you have, to complete a
              checkout, and which route you should go, NOT how many you MUST
              throw.
            </p>
            <p>For example:</p>
            <p>
              If target is 61 and you have 3 darts, you would go T15 then D8,
              because you could go 6 {"->"} D20 should you miss the T15.
            </p>
            <p>
              But if the target is 61 and you only have 2 darts, you would go
              T11 instead of T15, because if you hit a single 11, you can finish
              with the Bullseye, you wouldn&#39;t be able to finish going the
              T15 route.
            </p>
            <p>
              So don&#39;t be confused, when it says you have 3 darts and the
              checkout only shows two scores.
            </p>
          </span>
        </a>

        <div
          className={styles.dropdown_container}
          tabIndex="0"
          onBlur={closeDropdown}
        >
          <a
            className={`${styles.choose_mode_button} ${
              !isOpen ? `${styles.curved_bottom}` : ""
            }`}
            onClick={toggleDropdown}
          >
            {"Mode: " + (chosenMode === 1 ? "Both" : `${chosenMode} Darts`)}
          </a>
          {isOpen && (
            <div className={styles.dropdown_content}>
              <a
                className={styles.dropdown_item}
                onClick={() => itemSelected(3)}
              >
                {chosenMode === 3 ? "✓ " : ""}3 Darts
              </a>
              <a
                className={styles.dropdown_item}
                onClick={() => itemSelected(2)}
              >
                {chosenMode === 2 ? "✓ " : ""}2 Darts
              </a>
              <a
                className={styles.dropdown_item}
                onClick={() => itemSelected(1)}
              >
                {chosenMode === 1 ? "✓ " : ""}Both
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

MenuBar.propTypes = {
  chosenMode: PropTypes.number.isRequired,
  setChosenMode: PropTypes.func.isRequired,
};

export default MenuBar;
