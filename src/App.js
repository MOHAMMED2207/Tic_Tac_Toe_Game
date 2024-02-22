import React, { useContext } from "react";
import Start from "./components/Start/Start";
import Borde from "./components/bord/Borde";
import Model from "./components/model/Model";
import { GameContext } from "./components/App/GameContext";

const App = () => {
  const { GameUI } = useContext(GameContext);

  return (
    <div className="App">
      <div className="container">
        {GameUI === "start" && <Start />}
        {GameUI === "game" && <Borde />}
      </div>
      <Model />
    </div>
  );
};

export default App;
