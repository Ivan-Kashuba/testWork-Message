import React from "react";
import styles from "./Chat.module.css";
import { connect } from "react-redux";
import ChatItem from "./ChatItem";

const Chat = ({ messages }) => {
  return (
    <div className={styles.chat}>
      {messages.map((message, id) => {
        return <ChatItem text={message.text} key={id} time={message.time} />;
      })}
    </div>
  );
};

let mapStateToProps = (state) => ({
  messages: state.messages,
});
export default connect(mapStateToProps)(Chat);
