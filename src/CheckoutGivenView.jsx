import PropTypes from "prop-types";
import styles from "./CheckoutGiven.module.css";

function CheckoutGivenView({
  selectedCheckoutObj,
  blankGuessedCheckout,
  blankScore,
}) {
  return (
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
  );
}

CheckoutGivenView.propTypes = {
  selectedCheckoutObj: PropTypes.shape({
    checkout: PropTypes.arrayOf(PropTypes.string),
    note: PropTypes.string,
  }),

  blankGuessedCheckout: PropTypes.array,
  blankScore: PropTypes.string,
};

export default CheckoutGivenView;
