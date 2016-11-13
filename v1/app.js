var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("landing.ejs");
});

var campgrounds = [
    {name:"Salmon Creek", image:"http://www.fillmurray.com/50/50"},
    {name:"Granite Hill", image:"http://www.fillmurray.com/50/50"},
    {name:"Mountain Goats", image:"http://www.fillmurray.com/50/50"}
  ]

app.get("/campgrounds", function(req, res){
   res.render("campgrounds.ejs", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
  res.send("You hit the post route");
  //get data from form
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  //add to campgrounds array
  campgrounds.push(newCampground);
  //redirect back to campgrounds page
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
})

app.listen(3000, function(){
  console.log("Yelpcamp v1 server launched on localhost:3000");
});

