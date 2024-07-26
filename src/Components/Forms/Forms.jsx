import { useState } from "react";
import "./Forms.css";
import ExpenseTable from "../ExpenseTable.jsx";
import ExpenseForm from "../ExpenseForm.jsx";
import expenseData from "../../Components/expenseData.js"
import Header from "../Header/Header.jsx";


const Forms = () => {

  const [expenses, setExpenses] = useState(expenseData)
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [editingRowId, setEditingRowId] = useState('')

  return (
    <>
    <Header/>
      <h2 className="text-4xl text-center mb-10">Track Your Expense</h2>
      <div className="expense-tracker-main container mx-auto px-8">
        <div className="expense-tracker">
            <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} editingRowId={editingRowId} setEditingRowId={setEditingRowId}/>
            <ExpenseTable expenses={expenses} setExpenses={setExpenses} setExpense={setExpense} setEditingRowId={setEditingRowId}/>
        </div>
      </div>
    </>
  );
};

export default Forms;
