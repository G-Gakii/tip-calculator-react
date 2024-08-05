import React, { useState } from "react";
import "./Bill.scss";
import { FaDollarSign } from "react-icons/fa";

const Bill = ({ bill, setBill }) => {
  return (
    <form className="bill_container">
      <label htmlFor="bill">Bill</label>
      <div className="input_container">
        <FaDollarSign className="dollar-icon" />
        <input
          type="number"
          name="bill"
          id="bill"
          placeholder="142.55"
          value={bill}
          onChange={(e) => {
            setBill(e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default Bill;
