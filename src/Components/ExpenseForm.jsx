import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({ setExpenses }) => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [{required: true, message: 'Please enter your title'}, {minLength: 5, message: 'Title should be atleast 5 characters long.'}],
    category: [{required: true, message: 'Please select category'}],
    amount: [{required: true, message: 'Please enter amount'}]
  }

  const validate = (formData) => {
    const errorsData = {};

   Object.entries(formData).forEach(([key, value]) => {
    validationConfig[key].forEach((rule) => {
      if(rule.required && !value) {
        errorsData[key] = rule.message
      }

      if(rule.minLength && value.length<5) {
        errorsData[key] = rule.message
      }
    })
   })

    if (!formData.title) {
      errorsData.title = "Title is required";
    }
    if (!formData.category) {
      errorsData.category = "Category is required";
    }
    if (!formData.amount) {
      errorsData.amount = "Amount is required";
    }


    setErrors(errorsData);
    return errorsData;
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;
    setExpenses((prevstate) => [
      ...prevstate,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevstate) => ({ ...prevstate, [name]: value }));
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handleSumbit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />
      
      <Select label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        options = {['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']}
        defaultOption = 'Select Category'
        error={errors.category} />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      />
      <button className="add-btn bg-[#FFFAF3]">Add</button>
    </form>
  );
};

export default ExpenseForm;
