import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

import { CHANGE_LOCALIZATION } from "./actions/types";
import localization from "./utils/localization";

import App from "./App";

import "./index.css";

(() => {
    const language = localStorage.getItem("language");
    if (language) {
        store.dispatch({ type: CHANGE_LOCALIZATION, data: language });
        localization.setLanguage(language);
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