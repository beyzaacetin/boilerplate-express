let express = require('express');
let app = express();

//#1
//console.log("hello world");

//#2
// app.get("/", (req, res) => {
//  res.send("Hello Express")
// })

//#4
app.use("/public", express.static(__dirname + "/public"))

//#3
// app.get("/", (req,res) => {
//  res.sendFile(__dirname + '/views/index.html')
// })

































 module.exports = app;
