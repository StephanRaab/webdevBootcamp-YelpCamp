var express = require('express');
var app = express();

app.get("/", function(req, res){
  res.render("landing.ejs");
})

app.get("/campgrounds", function(req, res){
  var campgrounds = [
    {name:"Salmon Creek", image:"http://www.fillmurray.com/50/50"},
    {name:"Granite Hill", image:"http://www.fillmurray.com/50/50"},
    {name:"Mountain Goats", image:"http://www.fillmurray.com/50/50"}
  ]
    res.render("campgrounds.ejs", {campgrounds:campgrounds});
})

app.listen(3000, function(){
  console.log("Yelpcamp v1 server launched on localhost:3000");
})
