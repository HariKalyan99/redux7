import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { applyMiddleware, combineReducers, createStore } from "redux";
// import accountReducer from "./reducers/account";
// import bonusReducer from "./reducers/bonus";
// import logger from "redux-logger";
// import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice";
import bonusReducer from "./slices/bonusSlice";
import rewardReducer from "./reducers/reward";


// const store = createStore(
//   combineReducers({
//     account: accountReducer,
//     bonus: bonusReducer,
//   }),
//   applyMiddleware(logger, thunk)
// ); /*gloabl store*/

const store = configureStore({
  reducer:{
    account: accountReducer,
    bonus: bonusReducer,
    reward: rewardReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
