import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./MultipleChoice.module.css";
import next from "/src/assets/chevron.png";
import check from "/src/assets/check2.png";
import remove from "/src/assets/close.png";

function MultipleChoiceView({
  blankCheckout,
  blankScore,
  setblankGuessedCheckout,
  modeData,
  updateEverythingForNewCheckout,
  submitPressed,
  setSubmitPressed,
}) {
  const [buttonScoresArray, setButtonScoresArray] = useState([]);
  const [lastButtonPressed, setLastButtonPressed] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showResult, setShowResult] = useState(false);

  function populateButtonValues() {
    const trebleNums = ["T20", "T19", "T18", "T17", "T16", "T15", "T14", "T13", "T12", "T11", "T10", "T9", "T8"]; // prettier-ignore
    const doubleNums = ["D20", "D19", "D18", "D17", "D16", "D15", "D14", "D13", "D12", "D11", "D10", "D9", "D8", "D7", "D6", "D5"]; // prettier-ignore
    const singleNums = ["20", "19", "18", "17", "16", "15", "14", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]; // prettier-ignore

    let scoresForButtonArray;
    if (blankCheckout[blankCheckout.length - 1] === "") {
      scoresForButtonArray = createArrayWithSixDoubleScores(blankScore, doubleNums); // prettier-ignore
      setButtonScoresArray(scoresForButtonArray); // prettier-ignore
    } else {
      scoresForButtonArray = createArrayWithSixScores(blankScore, trebleNums, doubleNums, singleNums); // prettier-ignore
      setButtonScoresArray(scoresForButtonArray); // prettier-ignore
    }
  }

  function createArrayWithSixDoubleScores(score, array) {
    const pickedElements = [score];
    const length = array.length;

    while (pickedElements.length < 6) {
      const randomIndex = Math.floor(Math.random() * length);
      const randomElement = array[randomIndex];

      if (!pickedElements.includes(randomElement)) {
        pickedElements.push(randomElement);
      }
    }
    __shuffleArray(pickedElements);
    return pickedElements;
  }

  function createArrayWithSixScores(score, trebArr, doubArr, singArr) {
    const pickedElements = [score];

    let treblesToPick;
    let doublesToPick;
    let singlesToPick;

    //If first or second gap is:
    if (blankScore[0] === "T") {
      console.log("Treble");
      treblesToPick = 2;
      singlesToPick = 3;
    } else if (blankScore[0] === "D") {
      console.log("Double");
      treblesToPick = 2;
      doublesToPick = 1;
      singlesToPick = 2;
    } else {
      console.log("Single");
      treblesToPick = 3;
      singlesToPick = 2;
    }

    while (pickedElements.length < 6) {
      let t = 0;
      while (t < treblesToPick) {
        const randomIndex = Math.floor(Math.random() * trebArr.length);
        const randomElement = trebArr[randomIndex];

        if (!pickedElements.includes(randomElement)) {
          pickedElements.push(randomElement);
          t++;
        } else {
          continue; // Restart the 't' loop without incrementing 'd'
        }
      }
      let d = 0;
      while (d < doublesToPick) {
        const randomIndex = Math.floor(Math.random() * doubArr.length);
        const randomElement = doubArr[randomIndex];

        if (!pickedElements.includes(randomElement)) {
          pickedElements.push(randomElement);
          d++;
        } else {
          continue; // Restart the 'd' loop without incrementing 'd'
        }
      }
      let s = 0;
      while (s < singlesToPick) {
        const randomIndex = Math.floor(Math.random() * singArr.length);
        const randomElement = singArr[randomIndex];

        if (!pickedElements.includes(randomElement)) {
          pickedElements.push(randomElement);
          s++;
        } else {
          continue; // Restart the 's' loop without incrementing 'd'
        }
      }
    }
    __shuffleArray(pickedElements);
    return pickedElements;
  }

  function __shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleButtonClicked(scr) {
    setLastButtonPressed((prevVal) => {
      if (scr === prevVal) {
        setblankGuessedCheckout(blankCheckout);
        return "";
      } else {
        const updatedArray = blankCheckout.map((item) => {
          if (item === "") {
            return scr; // Replace "" with 3
          } else {
            return item; // Keep other items unchanged
          }
        });
        setblankGuessedCheckout(updatedArray);
        return scr;
      }
    });

    console.log(scr);
  }

  function removeChosenScore() {
    setblankGuessedCheckout(blankCheckout);
    setLastButtonPressed("");
  }

  function handleSubmit() {
    setSubmitPressed(true);
    if (lastButtonPressed === blankScore) {
      setIsCorrect(true);
      console.log("correct");
    } else if (lastButtonPressed !== blankScore) {
      setIsCorrect(false);
      console.log("wrong");
    } else {
      setIsCorrect(null);
    }
    setShowResult(true);
    console.log(lastButtonPressed);
  }

  function handleProceed() {
    updateEverythingForNewCheckout(modeData);
  }

  useEffect(() => {
    // This effect will run whenever blankCheckout changes
    // NEED THIS ASWELL AS handleProceed() INCASE GAMEMODE CHANGES WITHOUT CLICKING PROCEED
    setLastButtonPressed("");
    setButtonScoresArray([]);
    setSubmitPressed(false);
    setIsCorrect(null);

    populateButtonValues();
    setShowResult(false);

    // eslint-disable-next-line
  }, [blankCheckout]);

  return (
    <div>
      {showResult && (
        <div
          className={`${styles.result_container} ${
            isCorrect ? styles.bg_green : styles.bg_red
          }`}
        >
          {isCorrect ? <div>Correct!</div> : <div>Incorrect!</div>}
        </div>
      )}

      <div className={styles.container}>
        <div className={styles.grid_scores_container}>
          {buttonScoresArray.map((score, index) => {
            return (
              <a
                className={`${styles.grid_item} ${
                  !submitPressed && lastButtonPressed === score
                    ? styles.selected
                    : ""
                } ${submitPressed ? styles.disabled_link : ""} ${
                  submitPressed && isCorrect && blankScore === score
                    ? styles.bg_green
                    : ""
                } ${
                  submitPressed && !isCorrect && lastButtonPressed === score
                    ? styles.bg_red
                    : ""
                } ${
                  submitPressed && !isCorrect && blankScore === score
                    ? styles.correct_animation
                    : ""
                }`}
                onClick={() => handleButtonClicked(score)}
                key={index}
              >
                {score}
              </a>
            );
          })}
        </div>
        <div className={styles.grid_end_container}>
          <a
            className={`${styles.grid_item} ${styles.bg_red} ${
              submitPressed || lastButtonPressed === ""
                ? styles.disabled_link
                : ""
            } ${
              submitPressed || lastButtonPressed === ""
                ? styles.low_opacity
                : ""
            } `}
            onClick={removeChosenScore}
          >
            <img className={styles.icon_remove} src={remove} />
          </a>

          {submitPressed ? (
            <a
              className={`${styles.grid_item} ${styles.bg_blue}`}
              onClick={handleProceed}
            >
              <img className={styles.icon_next} src={next} />
            </a>
          ) : (
            <a
              className={`${styles.grid_item} ${styles.bg_green}  ${
                lastButtonPressed === "" ? styles.disabled_link : ""
              } ${lastButtonPressed === "" ? styles.low_opacity : ""}`}
              onClick={handleSubmit}
            >
              <img className={styles.icon_check} src={check} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

MultipleChoiceView.propTypes = {
  blankCheckout: PropTypes.array,
  blankScore: PropTypes.string,
  selectedCheckoutArray: PropTypes.array,
  blankGuessedCheckout: PropTypes.array,
  setblankGuessedCheckout: PropTypes.func,
  modeData: PropTypes.array,
  updateEverythingForNewCheckout: PropTypes.func,
  submitPressed: PropTypes.bool,
  setSubmitPressed: PropTypes.func,
};

export default MultipleChoiceView;
