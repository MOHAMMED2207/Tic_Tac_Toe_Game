import React, { useContext } from "react";
import Win from "./Win";
import Restart from "./Restart";
import { ContextModel } from "../App/ContextApp";
import Out from "./Out";
import Requre from "./Requre";

const Model = () => {
  const { Show, ModelMood } = useContext(ContextModel);

  return (
    <React.Fragment>
      {Show && (
        <div className="modal ">
          <div className="modal__content">
            <div className="container">
              {ModelMood === "winner" && <Win />}
              {ModelMood === "start" && <Restart />}
              {ModelMood === "Out" && <Out />}
              {ModelMood === "Req" && <Requre />}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Model;
