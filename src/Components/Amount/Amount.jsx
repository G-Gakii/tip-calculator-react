import React, { useEffect, useState } from "react";
import "./Amount.scss";

const Amount = ({ bill, tip, people }) => {
  const [totalPerson, setTotalPerson] = useState(4.27);
  const [overallTotal, setoverallTotal] = useState(32.79);

  useEffect(() => {
    let total = (bill * tip) / 100;
    setoverallTotal(total.toFixed(2));

    let perPerson = total / people;
    setTotalPerson(perPerson.toFixed(2));
  }, [bill, tip, people]);

  function handleReset() {
    setTotalPerson(0);
    setoverallTotal(0);
  }

  return (
    <div className="amount-container">
      <div className="per_person">
        <div className="title">
          <h4>Tip Amount </h4>
          <p>/ person</p>
        </div>
        <div className="amount">
          <h5 className="per__person__amount amount">${totalPerson}</h5>
        </div>
      </div>
      <div className="total">
        <div className="title">
          <h4>Total</h4>
          <p>/ person</p>
        </div>
        <div className="amount">
          <h5 className="total_amount amount">${overallTotal}</h5>
        </div>
      </div>
      <button onClick={() => handleReset()} type="reset">
        RESET
      </button>
    </div>
  );
};

export default Amount;
