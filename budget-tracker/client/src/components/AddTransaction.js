import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add A New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="formControl">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Name of Transaction"
          />
        </div>
        <div className="formControl">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount of Transaction"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
