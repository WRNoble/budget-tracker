import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import InOut from "./components/InOut";
import Transaction from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import GlobalProvider from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <InOut />
        <Transaction />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
