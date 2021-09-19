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

// Respond to "GET /articles/123 HTTP/1.1"
app.get("/articles/:id", (req, res) => {

  let { id } = req.params;

  // Function to check if id is interpretable as a positive integer
  const isNonnegativeInteger = (val) => {
    var re = new RegExp(/^[0-9]+$/);
    return re.test(val);
  };

  // Check and convert it
  if (!isNonnegativeInteger(id)) {
    return res.status(400).send({ message: `An article ID must be a non-negative integer, but you specified ${id}.` })
  }
  
  id = Number(id);

  const jsonObject = JSON.parse(fs.readFileSync("./articles_data.json", "utf8"));

  // Finding an article that has the specified id
  const targetArticle = jsonObject["articles"].find(d => d.id === id);

  // If not found...
  if (!targetArticle) {
    return res.status(404).send({ message: `Article #${id} not found.`});
  }

  res.status(200).send(targetArticle);
  
});

// Respond to "POST /create/123 HTTP/1.1"
app.post(("/create/:id"), (req, res) => {
  
  const { id } = req.params;
  const { title, content } = req.body;

  // Empty check
  if (!title) {
    return res.status(400).send({ message: "Title is empty." });
  }
  if (!content) {
    return res.status(400).send({ message: "Content is empty." });
  }

  // TODO: create article object and append it to json

  // Let's pretend to have actually made the article :p
  res.header("Location", `http://localhost:${PORT}/articles/${id}`)
  res.status(201).send({ message: "Successfully created." });

});

