import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpese = (props) => {
  const [isEdtting, setIsEditting] = useState();
  const saveExpenseDataHandler = (eteredExpenseData) => {
    const expenseData = {
      ...eteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const startedttingHandler = () => {
    setIsEditting(true);
  };
  return (
    <div className="new-expense">
      {!isEdtting && (
        <button onClick={startedttingHandler}>Add New Expense</button>
      )}
      {isEdtting && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpese;
