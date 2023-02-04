import "./card.css";
import Form from "./form";
import React, { useState } from "react";
import Form2 from "./form2";

const Card = () => {
  const [sign, setSign] = useState("login");

  const stateChangeHandler=()=>{
    setSign("rig");
  }
  const stateChangeHandler2=()=>{
    setSign("login");
  }

  if (sign === "login") {
    return (
      <div className="card">
        <Form changeState = {stateChangeHandler}></Form>
      </div>
    );
  }else{
    return(
        <div className="card">
            <Form2 changeState = {stateChangeHandler2}></Form2>
        </div>
    )
  }
};

export default Card;
