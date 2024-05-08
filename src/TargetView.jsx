import PropTypes from "prop-types";
import styles from "./Target.module.css";

function TargetView({ target, dartsToThrow }) {
  return (
    <div className={styles.container}>
      <div className={styles.target_outer}>
        <div className={styles.target_inner}>
          <p className={styles.target_p_text}>{target}</p>
        </div>
      </div>
      <p className={styles.hint_text}>
        How would you checkout with&nbsp;<b>{dartsToThrow}</b>&nbsp;darts in
        hand
      </p>
    </div>
  );
}

TargetView.propTypes = {
  target: PropTypes.number,
  dartsToThrow: PropTypes.number,
};

export default TargetView;
