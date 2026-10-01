import { configureStore } from "@reduxjs/toolkit";
import reducer from "./createSlice";

const store = configureStore({
  reducer: {
    Expense: reducer,
  },
});

export default store;
