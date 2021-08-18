var express = require("express");
var cors = require('cors');
var app = express();

app.use(cors());

app.listen(3000, () => {
  console.log("app running");
});

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/%27);

  res.setHeader('Access-Control-Allow-Origin', 'chrome-extension://iflbmakaddmjmnngaemgfggeaoplipik');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get("/", (req, res) => {
  res.send("asd");
});