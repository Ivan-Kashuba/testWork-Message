import React, { useState } from "react";
import { connect } from "react-redux";
import { setMessages } from "./../../redux/main-reducer";
import Send from "./Send";

const SendContainer = ({ setMessages }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    let newMessage = { inputValue, time };
    setMessages(newMessage);
    setInputValue("");
  };

  return (
    <Send
      handleButtonClick={handleButtonClick}
      handleInputChange={handleInputChange}
      inputValue={inputValue}
    />
  );
};

export default connect(null, { setMessages })(SendContainer);
