var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(3000, function () {
  console.log("Your app is ready and listening on port 3000");
});

module.exports = app;
