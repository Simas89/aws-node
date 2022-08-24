const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hi there :)"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Hey!");
});
