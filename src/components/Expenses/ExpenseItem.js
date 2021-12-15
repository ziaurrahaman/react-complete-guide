import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";
const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => setTitle("Updated!!");
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} Tk</div>
      </div>
      {/* <button onClick={clickHandler}>change title</button> */}
    </Card>
  );
};
export default ExpenseItem;
