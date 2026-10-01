import React from "react";
import Expense from "./Components/Expense";
import List from "./Components/List";


export default function App() {
  return (
    <div className="container">
      <Expense/>
      <List/>
    </div>
  );
}
