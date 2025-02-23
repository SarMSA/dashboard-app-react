import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/ContextProvider";

// Registering Syncfusion<sup style="font-size:70%">&reg;</sup>  license key
const syncfusionKey = process.env.REACT_APP_SYNCFUSION_KEY;
registerLicense(syncfusionKey);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
