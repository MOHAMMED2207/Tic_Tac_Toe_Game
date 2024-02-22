import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalStateModel } from "./components/App/ContextApp";
import { GameState } from "./components/App/GameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalStateModel>
    <GameState>
      <App />
    </GameState>
  </GlobalStateModel>
);
