import React, { createContext, useContext, useEffect, useState } from "react";
import { CalcWinner } from "../LogicGame/HelperGame";
import { ContextModel } from "./ContextApp";

const GameContext = createContext();

const GameState = (props) => {
  const { setModelMood, setShow } = useContext(ContextModel);
  // start The first screen will appear
  // game will appear again on the screen
  const [Screen, setScreen] = useState("start");
  //   When I step or Active on x| o
  const [Active, setActive] = useState("x");
  const [PlayMood, setPlayMood] = useState("user");
  // Gain converters for X or O or X and O
  const [Ties, setTies] = useState({ x: 0, o: 0, noOne: 0 });

  //  This is one player or the computer
  const ChangePlayMood = (mode) => {
    setPlayMood(mode);
    setScreen("game");
  };

  // The 9 squares are an array
  const [squarees, setsquarees] = useState(new Array(9).fill(""));

  // eslint-disable-next-line no-unused-vars
  const [Xplaynext, setXplaynext] = useState(false);
  const [XplaynextTogel, setXplaynextTogel] = useState(false);
  // Winer Name && Winer Index
  const [Winner, setWinner] = useState(null);
  const [WinnerLine, setWinnerLine] = useState(null);

  const checkWinner = (ns) => {
    const WinnerGame = CalcWinner(ns);

    if (WinnerGame) {
      setWinner(WinnerGame.Winner);
      setWinnerLine(WinnerGame.lines);
      setModelMood("winner");
      setShow(true);

      const ti = { ...Ties };
      ti[WinnerGame.Winner] += 1;
      setTies(ti);
    }
  };

  useEffect(() => {
    // Functin check is found no winner

    const CheckisNotWinner = () => {
      const Data = squarees.filter((sq) => sq === "");
      if (Data.length === 0) {
        if (!Winner) {
          setWinner("no");
          setModelMood("winner");
          setShow(true);
        } else {
          return;
        }
      }
    };
    CheckisNotWinner();
    // eslint-disable-next-line react-hooks/exhaustive-deps, no-use-before-define
  }, [Xplaynext, Winner, Screen, squarees]);

  //   When I press the rubber band, what does it do?
  const HandelSquareesClike = (ix) => {
    // Here they say when I choose x or o and start playing with the computer
    // When I play, I am only allowed to play whatever I choose, whether x or o
    const currentUser = Xplaynext ? "x" : "o"; // O
    if (PlayMood === "user" && currentUser !== Active) {
      return;
    }
    //  They say that if you have any square present, it means that the player played in it or if someone won, nothing will be returned
    if (squarees[ix] || Winner) {
      return;
    }
    let ns = [...squarees];
    ns[ix] = !XplaynextTogel ? "x" : "o";
    setsquarees(ns);
    // boolin true or false
    setXplaynextTogel(!XplaynextTogel);
    checkWinner(ns);
  };

  const RestGame = () => {
    setTies({ x: 0, o: 0 });
    setsquarees(new Array(9).fill(""));
    setXplaynextTogel(false);
  };

  const HandelReset = () => {
    setModelMood("start");
    setShow(true);
  };
  return (
    <GameContext.Provider
      value={{
        RestGame,
        HandelReset,
        GameUI: Screen,
        setGameUI: setScreen,
        Active,
        setActive,
        ChangePlayMood,
        PlayMood,
        setPlayMood,
        Xplaynext,
        setXplaynextTogel,
        XplaynextTogel,
        HandelSquareesClike,
        squarees,
        setsquarees,
        Winner,
        setWinner,
        WinnerLine,
        setWinnerLine,
        setScreen,
        Ties,
        setTies,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
export { GameState, GameContext };
