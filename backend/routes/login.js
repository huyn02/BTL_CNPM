const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Placeholder for the login page.");
});

module.exports = router;
