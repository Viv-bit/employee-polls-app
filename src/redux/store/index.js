import { createStore } from "redux";
import reducersRoot from "../reducers";
import middleware from "../middleware";

const reducersConfig = (state, action) => reducersRoot(state, action);

export const initCreateStore = () => createStore(reducersConfig, middleware);

const store = initCreateStore();

export default store;
