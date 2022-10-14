const express = require("express");
const { logger } = require("./logger");
const { authorize } = require("./authorize");
const app = express();
// app.use([logger, authorize]);
// if put this under get(), cannot see anything in consol
//req=>middleware=>res
//1 user vs route
//2 options - our own/express/third party

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", [logger, authorize], (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
