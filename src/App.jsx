import "./index.css";
import styles from "./App.module.css";
import MenuBar from "./MenuBar.jsx";
import TargetView from "./TargetView";
import CheckoutGivenView from "./CheckoutGivenView";
import MultipleChoiceView from "./MultipleChoiceView";
import data from "./checkouts-data-sample.jsx";
import { useEffect, useState } from "react";

//Do streak mode or learn mode

function App() {
  const [chosenMode, setChosenMode] = useState(1);
  const [modeData, setModeData] = useState([]);
  const [selectedCheckoutObj, setSelectedCheckoutObj] = useState({});
  const [selectedCheckoutArray, setSelectedCheckoutArray] = useState([]);
  const [blankCheckout, setBlankCheckout] = useState([]);
  const [blankGuessedCheckout, setblankGuessedCheckout] = useState([]);
  const [blankScore, setBlankScore] = useState("err");
  const [dartsToThrow, setDartsToThrow] = useState(0);
  const [target, setTarget] = useState(0);
  const [userChosenAnswer, setUserChosenAnswer] = useState("T1000");
  const [submitPressed, setSubmitPressed] = useState(false);
  const [showNextCheckout, setShowNextCheckout] = useState(false);

  useEffect(() => {
    // This effect will run whenever chosenMode changes
    const newData = dataToUse(chosenMode);
    console.log(newData);

    setModeData(newData);
    updateEverythingForNewCheckout(newData);

    // eslint-disable-next-line
  }, [chosenMode]);

  useEffect(() => {
    // This effect will run whenever submitPressed changes
    // Will probably use updateEverythingForNewCheckout(modeData);
    // eslint-disable-next-line
  }, [submitPressed]);

  function dataToUse(numberMode) {
    let checkoutsToUse = [];
    if (numberMode === 3) {
      checkoutsToUse = data.filter((co) => co.threeDarts.length > 0);
      console.log("Set to 3 darts array");
    } else if (numberMode === 2) {
      checkoutsToUse = data.filter((co) => co.twoDarts.length > 0);
      console.log("Set to 2 darts array");
    } else {
      checkoutsToUse = data;
      console.log("Set to both array");
    }
    return checkoutsToUse;
  }

  function updateEverythingForNewCheckout(d) {
    const singleCheckoutObj = getsingleCheckoutObj(d);
    let newCheckout;

    if (chosenMode === 3) {
      newCheckout =
        singleCheckoutObj.threeDarts[
          Math.floor(Math.random() * singleCheckoutObj.threeDarts.length)
        ];
      setDartsToThrow(3);
    } else if (chosenMode === 2) {
      newCheckout =
        singleCheckoutObj.twoDarts[
          Math.floor(Math.random() * singleCheckoutObj.twoDarts.length)
        ];
      setDartsToThrow(2);
    } else {
      if (
        singleCheckoutObj.threeDarts.length >= 1 &&
        singleCheckoutObj.twoDarts.length >= 1
      ) {
        const randomZeroOrOne = Math.round(Math.random());
        console.log(`(${randomZeroOrOne}) - 0 is 3darts. 1 is 2darts`);
        // newCheckout =
        //   randomZeroOrOne === 0
        //     ? singleCheckoutObj.threeDarts[
        //         Math.floor(Math.random() * singleCheckoutObj.threeDarts.length)
        //       ]
        //     : singleCheckoutObj.twoDarts[
        //         Math.floor(Math.random() * singleCheckoutObj.twoDarts.length)
        //       ];
        if (randomZeroOrOne === 0) {
          newCheckout =
            singleCheckoutObj.threeDarts[
              Math.floor(Math.random() * singleCheckoutObj.threeDarts.length)
            ];
          setDartsToThrow(3);
        } else {
          newCheckout =
            singleCheckoutObj.twoDarts[
              Math.floor(Math.random() * singleCheckoutObj.twoDarts.length)
            ];
          setDartsToThrow(2);
        }
      } else if (singleCheckoutObj.twoDarts.length === 0) {
        newCheckout =
          singleCheckoutObj.threeDarts[
            Math.floor(Math.random() * singleCheckoutObj.threeDarts.length)
          ];
        setDartsToThrow(3);
      } else if (singleCheckoutObj.threeDarts.length === 0) {
        newCheckout =
          singleCheckoutObj.twoDarts[
            Math.floor(Math.random() * singleCheckoutObj.twoDarts.length)
          ];
        setDartsToThrow(2);
      }
    }

    setSelectedCheckoutObj(newCheckout);
    setSelectedCheckoutArray(newCheckout.checkout);
    setTarget(singleCheckoutObj.target);

    console.log(newCheckout);
    console.log(newCheckout.checkout);
    console.log(singleCheckoutObj.target);

    updateBlankCheckoutAndChangeButtonValues(newCheckout.checkout);
  }

  function getsingleCheckoutObj(d) {
    return d[Math.floor(Math.random() * d.length)];
  }

  function updateBlankCheckoutAndChangeButtonValues(coArray) {
    const copyOfCoArray = [...coArray];
    const randomNumber = Math.floor(Math.random() * copyOfCoArray.length);
    const removedElement = copyOfCoArray.splice(randomNumber, 1)[0];

    setBlankScore(() => {
      console.log("blankScore: " + removedElement);
      return removedElement;
    });

    copyOfCoArray.splice(randomNumber, 0, "");
    setBlankCheckout(() => {
      console.log("this", copyOfCoArray);
      return copyOfCoArray;
    });

    setblankGuessedCheckout(copyOfCoArray);
  }

  return (
    <div className={`${styles.main_container} ${styles.bg_pattern}`}>
      <div className={styles.inner_container}>
        <div className={styles.inner_top}>
          <MenuBar chosenMode={chosenMode} setChosenMode={setChosenMode} />
        </div>
        <div className={styles.inner_main}>
          <div className={styles.target_and_checkout}>
            <TargetView target={target} dartsToThrow={dartsToThrow} />
            <CheckoutGivenView
              selectedCheckoutObj={selectedCheckoutObj}
              blankGuessedCheckout={blankGuessedCheckout}
              blankScore={blankScore}
            />
          </div>
          <MultipleChoiceView
            blankCheckout={blankCheckout}
            blankScore={blankScore}
            selectedCheckoutArray={selectedCheckoutArray}
            setUserChosenAnswer={setUserChosenAnswer}
            blankGuessedCheckout={blankGuessedCheckout}
            setblankGuessedCheckout={setblankGuessedCheckout}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
