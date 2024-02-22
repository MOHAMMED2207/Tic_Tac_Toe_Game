import React, { useContext } from "react";
import { GameContext } from "../App/GameContext";
import { ContextModel } from "../App/ContextApp";

const Restart = () => {
  const { RestGame } = useContext(GameContext);
  const { setShow } = useContext(ContextModel);
  return (
    <div className="restart">
      <h3 className="restart__title">Restart Game?</h3>
      <div className="restart__btns">
        <button onClick={() => setShow(false)} className="btn btn-sm">
          no, cancal
        </button>
        <button onClick={()=>{
          setShow(false)
          RestGame()
        }} className="btn btn-yellow btn-sm">
          yes, restart
        </button>
      </div>
    </div>
  );
};

export default Restart;
