var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("landing.ejs");
});

var campgrounds = [
    {name:"Salmon Creek", image:"https://media.mnn.com/assets/images/2015/09/tents-at-night-12.jpg.653x0_q80_crop-smart.jpg"},
    {name:"Granite Hill", image:"https://media.mnn.com/assets/images/2015/09/tents-at-night-1.jpg.838x0_q80.jpg"},
    {name:"Mountain Goats", image:"https://media.mnn.com/assets/images/2015/09/tents-at-night-2.jpg.838x0_q80.jpg"},
    {name:"Misty Shore", image:"https://media.mnn.com/assets/images/2015/09/tents-at-night-4.jpg.838x0_q80.jpg"},
    {name:"Blue Forest", image:"https://media.mnn.com/assets/images/2015/09/tents-at-night-3.jpg.838x0_q80.jpg"},
    {name:"The Gorge", image:"https://media.mnn.com/assets/images/2015/09/tents-at-night-10.jpg.838x0_q80.jpg"},
    {name:"Lake Placid", image:"https://media.mnn.com/assets/images/2015/09/tents-at-night-9.jpg.838x0_q80.jpg"}
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

