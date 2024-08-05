import React, { useState } from "react";
import "./Tip.scss";

const Tip = ({ tip, setTip }) => {
  const handleClick = (tipValue) => {
    setTip(tipValue);
  };
  return (
    <form action="">
      <label htmlFor="tip">Select Tip %</label> <br />
      <div className="button">
        <button type="button" className="btn" onClick={() => handleClick(5)}>
          5%
        </button>
        <button type="button" className="btn" onClick={() => handleClick(10)}>
          10%
        </button>
        <button type="button" className="btn" onClick={() => handleClick(15)}>
          15%
        </button>
        <button type="button" className="btn" onClick={() => handleClick(20)}>
          20%
        </button>
        <button type="button" className="btn" onClick={() => handleClick(25)}>
          25%
        </button>

        <input
          onChange={(e) => {
            setTip(e.target.value);
          }}
          className="btn"
          value={tip}
          placeholder="custom"
          type="number"
          name="custom"
          id="custom"
        />
      </div>
    </form>
  );
};

export default Tip;
