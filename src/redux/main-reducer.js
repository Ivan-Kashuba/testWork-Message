const SET__MESSAGE = "SET__MESSAGE";

let initialState = {
  messages: [{ text: "FirstTestText", time: "17:20" }],
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET__MESSAGE: {
      let newMessage = {
        text: action.messages.inputValue,
        time: action.messages.time,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default: {
      return state;
    }
  }
};

// ActionCreators
export const setMessages = (messages) => ({
  type: SET__MESSAGE,
  messages,
});

export default MainReducer;
