import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Bill from "./Components/Bill/Bill";
import Tip from "./Components/Tip/Tip";
import People from "./Components/People/People";
import Amount from "./Components/Amount/Amount";

const App = () => {
  const [bill, setBill] = useState(142.55);
  const [tip, setTip] = useState();
  const [people, setPeople] = useState(5);
  return (
    <div className="container">
      <Header className="head" />
      <div className="container_content">
        <div className="container_content_about">
          <Bill bill={bill} setBill={setBill} />
          <Tip tip={tip} setTip={setTip} />
          <People people={people} setPeople={setPeople} />
        </div>
        <div className="container_content_amount">
          <Amount bill={bill} tip={tip} people={people} />
        </div>
      </div>
    </div>
  );
};

export default App;
