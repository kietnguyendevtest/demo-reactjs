import React from "react";
import ReactDOM from "react-dom/client";

import { usePromiseTracker } from "react-promise-tracker";
import LoadingOverlay from "./components/LoadingOverlay";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const LoadingIndicator = () => {
    const { promiseInProgress } = usePromiseTracker();
    return promiseInProgress && <LoadingOverlay isLoadingOverlay={true} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />

        <LoadingIndicator />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
