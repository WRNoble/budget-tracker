// get all transactions
// /api/v1/transactions
// public
exports.getTransactions = (req, res, next) => {
  res.send("GET transactions");
};

// add a transactions
// /api/v1/transactions
// public
exports.addTransactions = (req, res, next) => {
  res.send("POST transactions");
};

// delete a transactions
// /api/v1/transactions/:id
// public
exports.deleteTransactions = (req, res, next) => {
  res.send("DELETE transactions");
};
