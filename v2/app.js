var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    mongoose   = require ('mongoose');

mongoose.connect("mongodb://localhost/yelpcamp");
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
  res.render("landing.ejs");
});

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

//https://media.mnn.com/assets/images/2015/09/tents-at-night-12.jpg.653x0_q80_crop-smart.jpg
//https://media.mnn.com/assets/images/2015/09/tents-at-night-1.jpg.838x0_q80.jpg"
//https://media.mnn.com/assets/images/2015/09/tents-at-night-2.jpg.838x0_q80.jpg"
//https://media.mnn.com/assets/images/2015/09/tents-at-night-4.jpg.838x0_q80.jpg"
//https://media.mnn.com/assets/images/2015/09/tents-at-night-3.jpg.838x0_q80.jpg"
//https://media.mnn.com/assets/images/2015/09/tents-at-night-10.jpg.838x0_q80.jpg"
//https://media.mnn.com/assets/images/2015/09/tents-at-night-9.jpg.838x0_q80.jpg"

//INDEX ROUTE - Show all campground
app.get("/campgrounds", function(req, res){
  //get all campgrounds from db
  Campground.find({}, function(err, allCampgrounds){
    if (err) {
      console.log(err);
    } else {
      res.render("index.ejs", {campgrounds:allCampgrounds});
    }
  });
});

//CREATE ROUTE - Add new campground to database
app.post("/campgrounds", function(req, res){
  //get data from form
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newCampground = {name: name, image: image, description: description};
  //create new campground and push to database
  Campground.create(newCampground, function(err, newlyCreated){
    if (err) {
      console.log(err);
    } else {
      //redirect back to campgrounds page
      res.redirect("/campgrounds");
    }
  })
});

//NEW ROUTE - Show form to create new campground
app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
})

//SHOW ROUTE - Shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
  //find the campground with provided ID
  Campground.findById(req.params.id, function(err, foundCampground){
    if(err){
      console.log(err)
    } else {
      //render show template with that campground
      res.render("show.ejs", {campground: foundCampground})
    }
  });
  req.param.id
});

app.listen(3000, function(){
  console.log("Yelpcamp v2 server launched on localhost:3000");
});

