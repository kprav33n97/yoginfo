import {useState} from 'react'

const ExpenseForm = ({setExpenses}) => {
   const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: ''
   })
    const handleSumbit = (e) => {
        e.preventDefault();
        setExpenses((prevstate) => [...prevstate, {...expense, id: crypto.randomUUID()}])
        setExpense({
          title: '',
          category: '',
          amount: ''
         })
    }

  return (
      <form className="expense-form" onSubmit={handleSumbit}>
            <div className="input-container">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" value={expense.title} onChange={(e) => setExpense((prevstate) => ({...prevstate, title: e.target.value}))} />
            </div>
            <div className="input-container">
              <label htmlFor="category" >Category</label>
                <select id="category" name="category" value={expense.category} onChange={(e) => setExpense((prevstate) => ({...prevstate, category: e.target.value}))} >
                    <option value="" hidden>Select category</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Bills">Bills</option>
                    <option value="Education">Education</option>
                    <option value="Medicine">Medicine</option>
                </select>
            </div>
            <div className="input-container">
              <label htmlFor="amount">Amount</label>
              <input id="amount" name="amount" value={expense.amount} onChange={(e) => setExpense((prevstate) => ({...prevstate, amount: e.target.value}))}/>
            </div>
            <button className="add-btn bg-[#FFFAF3]">Add</button>
      </form>
  )
}

export default ExpenseForm
