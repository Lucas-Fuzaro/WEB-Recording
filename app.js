var express = require("express");
var path = require("path");

var app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/setup", function(req, res) {
  res.sendFile(__dirname + "/setup.html");
});

app.get("/old-setup", function(req, res) {
  res.sendFile(__dirname + "/old_setup.html");
});

app.get("/recording-start", function(req, res) {
  res.sendFile(__dirname + "/recording-start.html");
});

app.get("/instructions", function(req, res) {
  res.sendFile(__dirname + "/instructions.html");
});

app.get("/recording", function(req, res) {
  res.sendFile(__dirname + "/recording.html");
});


app.use("/images", express.static(__dirname + "/Images"));
app.use("/fonts", express.static(__dirname + "/fonts"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
