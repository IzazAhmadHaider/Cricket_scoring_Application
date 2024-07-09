import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import { SquadProvider } from "./AppContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SquadProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </SquadProvider>
  </React.StrictMode>
);
