import { createSlice } from "@reduxjs/toolkit";

const expenceSlicer = createSlice({
  name: "expenseTracker",
  initialState: {
    expenses: [],
    filteredExpenses: []
  },
  reducers: {
    searchExpense: (state, action) => {
      const search = action.payload.toLowerCase();
      state.filteredExpenses = state.expenses.filter(
        (expense) =>
          expense.name.toLowerCase().includes(search) ||
          expense.amount.toString().includes(search),
      );
    },

    addExpenses: (state, action) => {
      state.expenses.push(action.payload);
      state.filteredExpenses = state.expenses;
    },

    deleteExpenses: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id != action.payload,
      );
      state.filteredExpenses = state.expenses;
    },

    clearExpense: (state) => {
      state.expenses = [];
      state.filteredExpenses = [];
    },
  },
});
export const { searchExpense, addExpenses, deleteExpenses, clearExpense } =
  expenceSlicer.actions;
export default expenceSlicer.reducer;
