var express = require("express");
var path = require("path");

var app = express();

var HTTP_PORT = process.env.PORT || 8080

app.use(express.static("public"));

// Redirect Users to "index.html" if route not accessed using client side routing
app.use((req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.use('/HTML', express.static(__dirname + '/HTML'));
app.use('/CSS', express.static(__dirname + '/CSS'));
app.use('/JavaScript', express.static(__dirname + '/JavaScript'));


app.listen(HTTP_PORT, ()=>{
    console.log("listening on port: " + HTTP_PORT);
});