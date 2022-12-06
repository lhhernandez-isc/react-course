import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 249.56,
    date: new Date(2021, 5, 3),
  },
  {
    id: "e2",
    title: "New Desk (wooden)",
    amount: 189.56,
    date: new Date(2021, 6, 5),
  },
  {
    id: "e3",
    title: "Dentist",
    amount: 17.56,
    date: new Date(2021, 12, 3),
  },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 75.56,
    date: new Date(2020, 2, 3),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log(expense);
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="container mx-auto flex flex-col justify-center space-y-10 p-6">
      {/* <h1 className='text-3xl text-center'>Lets starter</h1> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
