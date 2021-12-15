import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenceHandler = (expense) => {
    setExpenses((previousExpense) => {
      //  const a = [expense, ...previousExpense];
      // console.log(`newExpense ${a}`);
      return [expense, ...previousExpense];
    });
    // expenses.push(expense);
    // console.log(expenses);
  };

  // const a = [{ one: 1 }, { two: 2 }, { three: 3 }, { four: 4 }];
  // const b = JSON.parse(JSON.stringify(a));
  // b[0].one = 101;
  // console.log(a);
  // console.log(b);
  // const b = [...a];
  // b[1].b = 7;
  // console.log(a);
  // console.log(b);
  // let exp = [...expenses];
  // exp[0].id = "test";
  // console.log(expenses);
  // console.log(exp);
  return (
    <div>
      <NewExpense onAddExpense={addExpenceHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
