import React, { useContext } from "react";
import { ContextModel } from "../App/ContextApp";

const Requre = () => {
  const { setShow } = useContext(ContextModel);
  return (
    <div className="restart">
      <h3 className="restart__title">Not available now</h3>
      <div className="restart__btns">
        <button
          onClick={() => {
            setShow(false);
          }}
          className="btn btn-yellow btn-sm"
        >
          Ok, Thanks
        </button>
      </div>
    </div>
  );
};

export default Requre;
