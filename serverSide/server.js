var express =  require('express');
var mongoose = require('mongoose');
var bodyparses = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

app.get('/',function(req , res){
    res.send("hello world");
});

app.listen(3000);
console.log("server running on port:3000");

