import { createStore } from "redux";
import MainReducer from "./main-reducer";

let store = createStore(MainReducer);

export default store;
