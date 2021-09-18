const express = require("express");
const app = express();
const PORT = 8080;
const fs = require('fs');

// Parse request body as json
app.use( express.json() );

// Start listening at specified port
app.listen(
  PORT,
  () => console.log(`started api (endpoint baseURI: http://localhost:${PORT}/)`)
);

// Respond to "GET /articles HTTP/1.1"
app.get("/articles", (req, res) => {

  const jsonObject = JSON.parse(fs.readFileSync("./articles_data.json", "utf8"));

  res.status(200).send(jsonObject);
  
});

// Respond to "POST /create/123 HTTP/1.1"
app.post(("/create/:id"), (req, res) => {
  
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title) {
    res.status(400).send({ message: "Title is empty." });
  }
  if (!content) {
    res.status(400).send({ message: "Content is empty." });
  }

  // TODO: create article object and append it to json

  res.status(201).send({ message: "Successfully created." });

});

