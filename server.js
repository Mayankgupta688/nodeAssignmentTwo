var express = require("express");
var fs = require("fs");

var app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    fs.readFile("./employeeDetails.json", function(err, data) {
        var employeeList = JSON.parse(data);
        response.send(employeeList);
    })
});

app.get("/employees", function(req, res) {
    fs.readFile("./employeeDetails.json", function(err, data) {
        res.render("index", {employeeList: JSON.parse(data).employeeDetails});
    })
})

app.listen(8000);
