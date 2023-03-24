import { createStore } from "redux";
import reducersRoot from "../reducers";
import middleware from "../middleware";

const reducersConfig = (state, action) => reducersRoot(state, action);

const store = createStore(reducersConfig, middleware);

export default store;
