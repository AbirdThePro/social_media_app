import express from "express";
import json from "body-parser";

// creates web server
const app = express();

// creates body parser
let jsonParser = json();

// stores all posts
let posts = [];

// send api
app.post("/send", jsonParser, (req, res) => {
  // adds new post
  posts.push(req.body);
  // removes extra posts
  if (posts.length > 100) {
    posts.splice(posts.length - 100, 100);
  }
});

// messages api
app.get("/messages", (req, res) => {
  res.send(JSON.stringify({data: [posts]}));
});

// serves static files
app.use(express.static("dist"));

// starts server
app.listen(8080, () => {
  console.log("Running on https://127.0.0.1:8080");
});
