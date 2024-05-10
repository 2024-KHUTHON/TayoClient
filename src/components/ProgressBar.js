import React from "react";
import styles from "../styles/progressbar.module.css";

const ProgressBar = ({ bgcolor, completed }) => {
  return (
    <div className={styles.containerStyles}>
      <div
        style={{ backgroundColor: bgcolor, width: `${completed + 4}%` }}
        className={styles.fillerStyles}
      >
        <span className={styles.labelStyles} />
      </div>
    </div>
  );
};

export default ProgressBar;
