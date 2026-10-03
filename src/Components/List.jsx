import { useDispatch, useSelector } from "react-redux";
import { deleteExpenses } from "../Toolkit/createSlice";

export default function List() {
  const Expenses = useSelector((state) => state.Expense.expenses);
   const filteredExpenses = useSelector(
     (state) => state.Expense.filteredExpenses,
   );

  const dispatch = useDispatch();
  const Total = Expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <div className="expenseList">
      {filteredExpenses.map((expense) => (
        <div key={expense.id}>
          <p>{expense.name}</p>
          <p>{expense.amount}</p>

          <button onClick={() => dispatch(deleteExpenses(expense.id))}>
            Delete
          </button>
        </div>
      ))}
      {Expenses.length > 0 && <h3>Total: ₹{Total}</h3>}
    </div>
  );
}
