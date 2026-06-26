import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { BuddyProvider } from "./context/BuddyContext";

ReactDOM.createRoot(
    document.getElementById("root")
).render(
    <React.StrictMode>
        <BuddyProvider>
            <App />
        </BuddyProvider>
    </React.StrictMode>
);