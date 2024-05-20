import PropTypes from "prop-types";
import styles from "./CheckoutGiven.module.css";
import next from "/src/assets/chevron.png";
import { useState, useEffect } from "react";

function CheckoutGivenView({
  selectedCheckoutObj,
  blankGuessedCheckout,
  submitPressed,
}) {
  console.log(selectedCheckoutObj.note);

  const [tipOpen, setTipOpen] = useState(false);

  function handleTip() {
    console.log("clicked handle tip");
    setTipOpen((prevVal) => {
      return !prevVal;
    });
  }

  useEffect(() => {
    // This effect will run whenever chosenMode changes

    setTipOpen(false);
    // eslint-disable-next-line
  }, [selectedCheckoutObj]);

  return (
    <>
      <div className={styles.outer_container}>
        <div className={styles.inner_container}>
          {blankGuessedCheckout.map((score, index) => {
            return score === "" ? (
              <div className={`${styles.item} ${styles.empty}`} key={index}>
                {score}
              </div>
            ) : (
              <div className={styles.item} key={index}>
                {score}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.tip_outer_container}>
        {submitPressed && selectedCheckoutObj.note !== "" && (
          <a className={styles.tip_inner_container} onClick={handleTip}>
            <div className={styles.tip_header}>
              <img
                className={`${styles.icon_tip} ${tipOpen ? styles.rotate : ""}`}
                src={next}
              />
              <p className={styles.tip_header_text}>Tip</p>
            </div>
            {tipOpen && (
              <div className={styles.tip_text}>{selectedCheckoutObj.note}</div>
            )}
            {tipOpen && selectedCheckoutObj.note2 !== undefined && (
              <div className={styles.tip_text}>{selectedCheckoutObj.note2}</div>
            )}
          </a>
        )}
      </div>
    </>
  );
}

CheckoutGivenView.propTypes = {
  selectedCheckoutObj: PropTypes.shape({
    checkout: PropTypes.arrayOf(PropTypes.string),
    note: PropTypes.string,
    note2: PropTypes.string,
  }),

  blankGuessedCheckout: PropTypes.array,
  blankScore: PropTypes.string,
  submitPressed: PropTypes.bool,
};

export default CheckoutGivenView;
