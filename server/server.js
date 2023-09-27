const express = require("express");
const createRouter = require("./helpers/createRouter");
const MongoClient = require("mongodb").MongoClient;

const app = express();

MongoClient.connect("mongodb://127.0.0.1:27017").then((client) => {
  const db = client.db("hotel");
  const bookingsCollection = db.collection("bookings");

  const bookingsRouter = createRouter(bookingsCollection);
  app.use("/api/bookings", bookingsRouter);
});

app.listen(9000, function () {
  console.log(`App listening on port ${this.address().port}`);
});
