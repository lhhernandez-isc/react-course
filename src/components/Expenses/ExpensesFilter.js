import React, { useState } from "react";

const ExpensesFilter = (props) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const yearChangeHandler = (event) => {
    props.onChangeYear( event.target.value );
  };
  return (
    <div
      className="flex flex-col space-y-3 justify-between 
    md:flex-row md:space-y-0 p-6"
    >
      <p className="text-white text-lg font-bold">Filter by year</p>
      <select 
        onChange={yearChangeHandler} 
        value={year}
        className="px-8 py-2 rounded-lg bg-white"
    >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
