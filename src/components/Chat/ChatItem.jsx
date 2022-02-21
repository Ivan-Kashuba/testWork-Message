import styles from "./Chat.module.css";
import React from "react";

const ChatItem = ({ text, time }) => {
  return (
    <>
      <div className={styles.chatItem}>
        <div className={styles.itemText}>{text}</div>
        <div className={styles.time}>{time}</div>
      </div>
      <div></div>
    </>
  );
};

export default ChatItem;
