import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./assets/index.css";
import "./assets/bootstrap.min.css";

const container = document.getElementById("app");

const root = createRoot(container);

root.render(<App />);