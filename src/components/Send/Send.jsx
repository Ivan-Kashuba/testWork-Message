import React from "react";
import styles from "./Send.module.css";
import send from "./../../img/Send.svg";

const Send = ({ inputValue, handleInputChange, handleButtonClick }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={handleInputChange}
        value={inputValue}
        className={styles.input}
      />
      <div className={styles.button} onClick={handleButtonClick}>
        <img src={send} alt="Send" />
      </div>
    </div>
  );
};

export default Send;
