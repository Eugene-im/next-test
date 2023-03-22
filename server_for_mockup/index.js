const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data.json");
const port = process.env.PORT || 3001;
app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.use("/transactions", (req, res) => {
  res.json(data);
});
app.use("/", express.static(__dirname + "/"));
app.listen(port);
