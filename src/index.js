import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./views/App";
import store from "./redux/store";

// Import All CSS Parameters
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
