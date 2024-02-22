import React, { useContext } from "react";
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";
import { GameContext } from "../App/GameContext";

const BorderCard = ({ user = "nouser", active, index }) => {
  const { HandelSquareesClike } = useContext(GameContext);
  return (
    <button
      className={`card ${active && user === "x" && "shadow-blue"} ${
        active && user === "o" && "shadow-yellow"
      } ${active ? "active" : "shadow-gray"}`}
      onClick={() => HandelSquareesClike(index)}
    >
      {user === "x" && <Xicon color={active && "dark"} size="lg" />}
      {user === "o" && <Oicon color={active && "dark"} size="lg" />}
    </button>
  );
};

export default BorderCard;
