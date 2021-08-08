import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./login";
import pokemonReducer from "./pokemon";
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
  login: loginReducer,
  pokemon: pokemonReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
