const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3001;
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Welcome to Nodejs");
});

// create new route with /about page
app.get("/about", (req, res) => {
  res.send("About Page");
});

// create new route with /contact page
app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/home", (req, res) => {
  res.send("Home page");
});

app.listen(PORT, () => {
  console.log(`App listen in port ${PORT}`);
});

// connect to Mongo DB using Mongoose
console.log("MongoDB connect string: ", process.env.MONGODB_CONNECTION_STR);
const connectionStr = process.env.MONGODB_CONNECTION_STR;

main()
  .then(() => console.log("Connected to Mongo DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(connectionStr);
}
