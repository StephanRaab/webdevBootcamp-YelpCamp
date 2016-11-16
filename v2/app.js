var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    mongoose   = require ('mongoose');

mongoose.connect("mongodb://localhost/yelpcamp");
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
  res.render("landing.ejs");
});

//Schema setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

//Campground.create(
//    { 
//      name:"Granite Hill",
//      image:"https://media.mnn.com/assets/images/2015/09/tents-at-night-1.jpg.838x0_q80.jpg"
//
//    }, function(err, campground){
//      if(err) {
//        console.log(err);
//      } else {
//        console.log("Newly created campground");
//       console.log(campground);
//      }
//    });


//https://media.mnn.com/assets/images/2015/09/tents-at-night-12.jpg.653x0_q80_crop-smart.jpg
//https://media.mnn.com/assets/images/2015/09/tents-at-night-1.jpg.838x0_q80.jpg"
//https://media.mnn.com/assets/images/2015/09/tents-at-night-2.jpg.838x0_q80.jpg"
//https://media.mnn.com/assets/images/2015/09/tents-at-night-4.jpg.838x0_q80.jpg"
//https://media.mnn.com/assets/images/2015/09/tents-at-night-3.jpg.838x0_q80.jpg"
//https://media.mnn.com/assets/images/2015/09/tents-at-night-10.jpg.838x0_q80.jpg"
//https://media.mnn.com/assets/images/2015/09/tents-at-night-9.jpg.838x0_q80.jpg"

app.get("/campgrounds", function(req, res){
  //get all campgrounds from db
  Campground.find({}, function(err, allCampgrounds){
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds.ejs", {campgrounds:allCampgrounds});
    }
  });
});

app.post("/campgrounds", function(req, res){
  //get data from form
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
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

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
})

app.listen(3000, function(){
  console.log("Yelpcamp v2 server launched on localhost:3000");
});

