import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from "./reducers/auth-slicer";
import { cartSlice } from "./reducers/cart-slicer";
import { settingsSlice } from "./reducers/settings";
import { productSlice } from "./reducers/product-slice";

const store = configureStore({
  reducer:{
    auth : authSlice.reducer,
    cart: cartSlice.reducer,
    settings:settingsSlice.reducer,
    products:productSlice.reducer
  }
})
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
