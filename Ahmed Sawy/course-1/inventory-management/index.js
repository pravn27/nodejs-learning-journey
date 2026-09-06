const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3001;

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

const connectionStr =
  "mongodb+srv://praveensri27_db_user:FagfS5krLbdVZmnS@cluster0.5jmbikv.mongodb.net/?appName=Cluster0";

main()
  .then(() => console.log("Connected to Mongo DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(connectionStr);
}
