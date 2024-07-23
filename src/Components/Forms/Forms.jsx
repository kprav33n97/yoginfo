import { useState } from "react";
import "./Forms.css";
import ExpenseTable from "../ExpenseTable.jsx";
import ExpenseForm from "../ExpenseForm.jsx";
import expenseData from "../../Components/expenseData.js"
import Header from "../Header/Header.jsx";


const Forms = () => {

  const [expenses, setExpenses] = useState(expenseData)
  return (
    <>
    <Header/>
      <h2 className="text-4xl text-center mb-10">Track Your Expense</h2>
      <div className="expense-tracker-main container mx-auto px-8">
        <div className="expense-tracker">
            <ExpenseForm setExpenses={setExpenses}/>
            <ExpenseTable expenses={expenses}/>
        </div>
      </div>
    </>
  );
};

export default Forms;
