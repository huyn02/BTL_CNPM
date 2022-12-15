const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Placeholder for the dashboard page.");
});

module.exports = router;
