import React, { useContext } from "react";
import { GameContext } from "../App/GameContext";
import { ContextModel } from "../App/ContextApp";

const Out = () => {
  const { setGameUI } = useContext(GameContext);
  const { setShow } = useContext(ContextModel);

  return (
    <div className="restart">
      <h3 className="restart__title">Qut Game?</h3>
      <div className="restart__btns">
        <button onClick={() => setShow(false)} className="btn btn-sm">
          no, cancal
        </button>
        <button
          onClick={() => {
            setShow(false);
            setGameUI("start");
          }}
          className="btn btn-yellow btn-sm"
        >
          yes, Qut GAME
        </button>
      </div>
    </div>
  );
};

export default Out;
