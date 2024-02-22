import React, { createContext, useState } from "react";

const ContextModel = createContext();

const GlobalStateModel = (props) => {
  const [Show, setShow] = useState(false);
  const [Mood, setMood] = useState("winner");
  const ShowModel = () => setShow(true);
  const HidenModel = () => setShow(false);
  return (
    <ContextModel.Provider
      value={{
        Show,
        ModelMood: Mood,
        setModelMood: setMood,
        ShowModel,
        setShow,
        HidenModel,
      }}
    >
      {props.children}
    </ContextModel.Provider>
  );
};
export { GlobalStateModel, ContextModel };
