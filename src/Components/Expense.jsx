import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addExpenses,
  clearExpense,
  searchExpense,
} from "../Toolkit/createSlice";

export default function Expense() {
  const [search, setSearch] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Expense Tracker</h1>
      <input
        type="text"
        placeholder="Search 🔍"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          dispatch(searchExpense(e.target.value));
        }}
      />
      <input
        type="text"
        placeholder="Expense Name"
        value={expenseName}
        onChange={(e) => {
          setExpenseName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (expenseName.trim() === "" || amount <= 0) {
            alert("Fill the details");
            return;
          }
          dispatch(
            addExpenses({
              id: Date.now(),
              name: expenseName,
              amount: Number(amount),
            }),
          );
          setExpenseName("");
          setAmount("");
        }}
      >
        Add
      </button>
      <button onClick={() => dispatch(clearExpense())}>Clear</button>
    </div>
  );
}
