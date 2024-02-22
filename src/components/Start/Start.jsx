import React, { useContext } from "react";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";
import { GameContext } from "../App/GameContext";
import { ContextModel } from "../App/ContextApp";

const Start = () => {
  const {
    Active,
    setActive,
    ChangePlayMood,
    setXplaynextTogel,
    XplaynextTogel,
  } = useContext(GameContext);
  const { setModelMood, setShow } = useContext(ContextModel);

  return (
    <div className="start">
      <div className="start__header">
        <Xicon />
        <Oicon />
      </div>
      <div className="cardHome shadow-gray">
        <h1 className="text-lg">Pick player 1'st mark</h1>
        <div className="start__players">
          <span
            onClick={() => {
              setXplaynextTogel(false);
              setActive("x");
            }}
            className={Active === "x" ? "start__players--active " : ""}
          >
            <Xicon color={Active === "x" ? "dark " : "light"} />
          </span>
          <span
            onClick={() => {
              setXplaynextTogel(true);
              setActive("o");
            }}
            className={Active === "o" ? "start__players--active " : ""}
          >
            <Oicon color={Active === "o" ? "dark " : "light"} />
          </span>
        </div>
        <p className="text-light text-normal">
          remember: {!XplaynextTogel ? "x" : "o"} goes first
        </p>
      </div>
      <div className="start__btns">
        <button
          className="btn btn-yellow"
          onClick={() => {
            // ChangePlayMood("CPU");
            // is not avalibel now
            setShow(true);
            setModelMood("Req");
          }}
        >
          new game (vs CPU)
        </button>
        <button
          className="btn btn-blue"
          onClick={() => {
            ChangePlayMood("User");
          }}
        >
          {" "}
          new game (vs Player)
        </button>
      </div>
    </div>
  );
};

export default Start;
