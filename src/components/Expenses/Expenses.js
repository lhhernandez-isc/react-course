import { useState } from "react";
import Card from "../ui/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div className="flex flex-col space-y-5 p-10 bg-slate-700 rounded-xl ">
      <ExpensesFilter
        selected={filteredYear}
        onChangeYear={changeYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <Card className="text-white">
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
