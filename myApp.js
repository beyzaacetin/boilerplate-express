let express = require('express');
let app = express();

//a1
//console.log("hello world");

//a2
app.get("/", (req, res) => {
 res.send("Hello Express")
})


































 module.exports = app;
