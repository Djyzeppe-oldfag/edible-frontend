import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import store from "./store";

import { updatePayload } from "./actions/auth";

import App from "./App";

import "./index.css";

(() => {
    const token = localStorage.getItem("token");
    if (token) {
        store.dispatch(updatePayload(token));
    };
})();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();