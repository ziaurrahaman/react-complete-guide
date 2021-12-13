import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls"></div>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text"></input>
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01"></input>
        <label>Date</label>
        <input type="date" min="2019-1-1" max="2022-12-12"></input>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
