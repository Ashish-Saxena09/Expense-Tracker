import { createSlice } from "@reduxjs/toolkit";

const expenceSlicer = createSlice({
  name: "expenseTracker",
  initialState: {
    expenses: [],
  },
  reducers: {
    addExpenses: (state, action) => {
      state.expenses.push(action.payload);
    },

    deleteExpenses: (state, action) => {
     state.expenses = state.expenses.filter((expense) => expense.id != action.payload);
    },

    clearExpense: (state) => {
      state.expenses = []
    },
  },
});
export const { addExpenses, deleteExpenses, clearExpense } = expenceSlicer.actions
export default expenceSlicer.reducer;
