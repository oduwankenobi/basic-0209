import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import generateId from "../middlewares/generateId";
import api from "../middlewares/api";
import history from "../../history";

const enhancer = applyMiddleware(
  thunk,
  routerMiddleware(history),
  generateId,
  api,
  logger
);

const store = createStore(reducer, enhancer);

//dev only
window.store = store;

export default store;
