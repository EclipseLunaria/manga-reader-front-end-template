import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const container = document.getElementById("root");

if (container) {
    const root = createRoot(container);
    root.render(<App />);
}