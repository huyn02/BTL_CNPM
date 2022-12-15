const express = require("express");
const login = require("./routes/login");
const dashboard = require("./routes/dashboard");

require("dotenv").config();

const PORT = process.env.PORT || 10000;

const app = express();

app.use("/api/login", login);

app.use("/api/dashboard", dashboard);

app.listen(PORT, () => {
  console.log(`API server started on port: ${PORT}`);
});
