import React, { useState } from "react";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {};

  return (
    <li>
      <Card
        className="flex flex-col-reverse space-y-reverse space-y-8 px-4 py-2 rounded-lg bg-slate-500 
      md:flex-row md:space-y-0 items-center md:justify-between md:space-x-10 text-white "
      >
        <ExpenseDate date={props.date} />
        {/* <button
        onClick={clickHandler}
        className="px-3 py-2 bg-emerald-500 rounded-full border-2 border-transparent 
            transition duration-200 text-md font-normal hover:bg-emerald-600 
            shadow-2xl md:order-3"
      >
        Change Title
      </button> */}
        <div className="flex flex-row justify-between items-center w-full font-bold text-xl text-left">
          <h2>{title}</h2>
          <div className="flex flex-col space-y-2 items-center">
            <div
              className="grow-0 py-2 px-4 rounded-lg border-white border-2 
            bg-indigo-600 "
            >
              ${props.amount}
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
