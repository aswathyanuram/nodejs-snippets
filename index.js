const express = require("express");
const cors = require("cors");
const data = require("./products.js");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(8080);
