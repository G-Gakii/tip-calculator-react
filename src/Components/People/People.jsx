import React, { useState } from "react";
import "./People.scss";
import { IoMdPerson } from "react-icons/io";

const People = ({people,setPeople}) => {
  
  return (
    <form>
      <label htmlFor="people">Number of People</label>
      <div className="people_container">
        <IoMdPerson className="person" />
        <input
          type="number"
          name="people"
          id="people"
          placeholder="5"
          value={people}
          onChange={(e) => {
            setPeople(e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default People;
