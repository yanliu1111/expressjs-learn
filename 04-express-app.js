const express = require("express");
const { resolve } = require("path");
const path = require("path");

const app = express();
//setup static and middleware
app.use(express.static("./public"));

//app.get
// app.get("/", (req, res) => {
//   //resolve or join = same function
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// Adding to static assets
// SSR
// });

//app.all
app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

//app.post
//app.put
//app.delete
//app.use
//app.listen
