import React, { useContext } from "react";
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";
import { GameContext } from "../App/GameContext";
import { ContextModel } from "../App/ContextApp";

const Win = () => {
  const { Winner, setWinner, setWinnerLine, setTies, setScreen, setsquarees } =
    useContext(GameContext);
  const { setShow } = useContext(ContextModel);

  const HandelClickQuit = () => {
    setShow(false);
    setScreen("start");
    setsquarees(new Array(9).fill(""));
    setWinnerLine(null);
    setWinner(null);
    setTies({ x: 0, o: 0 });
  };

  const HandelNextRound = () => {
    setShow(false);
    setsquarees(new Array(9).fill(""));
    setWinnerLine(null);
    setWinner(null);
  };

  return (
    <div className="score">
      {Winner && Winner !== "no" ? (
        <>
          <p>yoy win!</p>
          <h3
            className={`score__title ${
              Winner === "O" ? "text-yellow" : "text-blue"
            }`}
          >
            {Winner === "x" && <Xicon />}
            {Winner === "o" && <Oicon />}
            Takes the round
          </h3>
        </>
      ) : (
        <h3 className="score__title text-yellow">No Winner !</h3>
      )}
      <div className="score__btns">
        <button onClick={HandelClickQuit} className="btn btn-sm">
          Quit
        </button>
        <button onClick={HandelNextRound} className="btn btn-sm btn-yellow">
          Next Round
        </button>
      </div>
    </div>
  );
};

export default Win;
