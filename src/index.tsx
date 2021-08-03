import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  data: [{}],
};

const reducerList = (prevState = initialState, action: any) => {
  switch (action.type) {
    case "USER_CREATE":
      return {
        data: [...prevState.data, action.payload],
      };
    default:
      return prevState;
  }
};

const store = createStore(reducerList);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
