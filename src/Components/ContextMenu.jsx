import React from "react";

const ContextMenu = ({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowId,
  setExpense,
  expenses,
  setEditingRowId,
}) => {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          // console.log(rowId);
          const { title, category, amount } = expenses.find(
            (expense) => expense.id === rowId
          );
          // console.log(foundExpense)
          setEditingRowId(rowId);

          setExpense({ title, category, amount });

          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
};

export default ContextMenu;
