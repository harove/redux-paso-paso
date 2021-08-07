import { createStore, combineReducers, compose } from "redux";
import loginReducer from "./login";
import productReducer from "./products";
import userReducer from "./users";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  users: userReducer,
  products: productReducer,
  login: loginReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
