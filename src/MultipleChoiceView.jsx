import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./MultipleChoice.module.css";
import next from "/src/assets/chevron.png";
import check from "/src/assets/check2.png";
import remove from "/src/assets/close.png";

function MultipleChoiceView({
  blankCheckout,
  blankScore,
  selectedCheckoutArray,
  setUserChosenAnswer,
  blankGuessedCheckout,
  setblankGuessedCheckout,
  modeData,
  updateEverythingForNewCheckout,
}) {
  const [buttonScoresArray, setButtonScoresArray] = useState([]);
  const [lastButtonPressed, setLastButtonPressed] = useState("-1");

  function populateButtonValues() {
    const trebleNums = ["T20", "T19", "T18", "T17", "T16", "T15", "T14", "T13", "T12", "T11", "T10", "T9", "T8"]; // prettier-ignore
    const doubleNums = ["D20", "D19", "D18", "D17", "D16", "D15", "D14", "D13", "D12", "D11", "D10", "D9", "D8", "D7", "D6", "D5"]; // prettier-ignore
    const singleNums = ["20", "19", "18", "17", "16", "15", "14", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]; // prettier-ignore

    if (blankCheckout[blankCheckout.length - 1] === "") {
      const testArray = createArrayWithSixDoubleScores(blankScore, doubleNums);
      setButtonScoresArray(testArray); // prettier-ignore
      console.log(testArray);
    } else {
      const testArray = createArrayWithSixScores(
        blankScore,
        trebleNums,
        doubleNums,
        singleNums
      );
      setButtonScoresArray(testArray); // prettier-ignore
      console.log(testArray);
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
        setUserChosenAnswer("nothing_selected");
        return "0000000";
      } else {
        const updatedArray = blankCheckout.map((item) => {
          if (item === "") {
            setUserChosenAnswer(scr);
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
    setLastButtonPressed("0000000");
    setUserChosenAnswer("nothing_selected");
  }

  function handleSubmit() {
    if (lastButtonPressed === blankScore) {
      console.log("correct");
      updateEverythingForNewCheckout(modeData);
    }
    console.log(lastButtonPressed);
  }

  useEffect(() => {
    // This effect will run whenever blankScore changes
    setLastButtonPressed((prevVal) => {
      console.log("lbp", prevVal);
      return "0000000";
    });
    populateButtonValues();
    console.log("loops");

    // eslint-disable-next-line
  }, [blankCheckout]);

  return (
    <div className={styles.container}>
      <div className={styles.grid_scores_container}>
        {buttonScoresArray.map((score, index) => {
          return (
            <a
              className={`${styles.grid_item} ${
                lastButtonPressed === score ? styles.selected : ""
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
          className={`${styles.grid_item} ${styles.grid_undo_item}`}
          onClick={removeChosenScore}
        >
          <img className={styles.icon_remove} src={remove} />
        </a>
        <a
          className={`${styles.grid_item} ${styles.grid_advance_item}`}
          onClick={handleSubmit}
        >
          <img className={styles.icon_check} src={check} />
        </a>
      </div>
    </div>
  );
}

MultipleChoiceView.propTypes = {
  blankCheckout: PropTypes.array,
  blankScore: PropTypes.string,
  selectedCheckoutArray: PropTypes.array,
  setUserChosenAnswer: PropTypes.func,
  blankGuessedCheckout: PropTypes.array,
  setblankGuessedCheckout: PropTypes.func,
  modeData: PropTypes.array,
  updateEverythingForNewCheckout: PropTypes.func,
};

export default MultipleChoiceView;
