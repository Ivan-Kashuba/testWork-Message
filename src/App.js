import { Provider } from "react-redux";
import "./App.css";
import Chat from "./components/Chat/Chat";
import SendContainer from "./components/Send/SendContainer";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Chat />
        <div className="send">
          <SendContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
