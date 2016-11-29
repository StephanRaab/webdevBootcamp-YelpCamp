# webdeveloperbootcamp

### November 14
+ yelpcamp navbar and form styling
+ intro to sql and nosql databases
+ installing mongoDB
+ writing mongocode
  + mongod --> starts mongo daemon
  + mongo --> opens mongo shell
  + help
  + show dbs
  + show collections
  + use
  + insert --> db.*dbname*.insert({json style info here})
  + find --> db.*dbname*.find()
  + update --> db.*dbname*.update({this}, {to this})
  + remove --> db.*dbname*.remove({remove this guy})
  + CRUD (Create, Read, Update, Destroy)
+ Introduction to Mongoose
  + Mongoose Schema
  + Mongoose Model --> ``` var Foo = mongoose.model("Foo", barSchema);
  + ODM --> Object Data Mapper

### November 15
+ Connecting Mongoose to Yelpcamp
  + Setup Campground Model
  + Use campground model inside of routes

### November 18-26
+ Codeschool Javascript Classes
  + Javascript Roadtrip 1
  + Javascript Roadtrip 2
  + Javascript Roadtrip 3
  + ES2015
  + Javascript Best Practices
  + Try jQuery
  + jQuery: The Return Flight
  + Try SQL

### November 28
+ db.*collectionName*.drop() --> will remove all data from that collection
+ RESTful routes
  |   name  |     url   |     verb   |    description|
  |--------_|-----------|------------|---------------|
  | INDEX  | /dogs     |  GET  |   Display a list of ALL dogs|
  | NEW    | /dogs/new |  GET  |   Displays form to make new dog|
  | CREATE | /dogs/    |  POST |   Add new dog to DB|
  | SHOW   | /dogs/:id |  GET  |   Shows info about ONE dog|
+ New Mongoose Method "findById(id, callback)"
+ Added description option to the new form
+ Tied mongo id to the "show more" button url
+ Successfully created a SHOW ROUTE
