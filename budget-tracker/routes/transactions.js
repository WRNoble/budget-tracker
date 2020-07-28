const express = require("express");
const router = express.Router();
const { getTransactions } = router.get("/", (req, res) =>
  res.send("hello from transactions.js")
);

module.exports = router;
