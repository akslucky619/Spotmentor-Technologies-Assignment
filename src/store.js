import { createStore } from "redux";
import classReducer from "./reducers/classReducer";

const store = createStore(classReducer);

export default store;
