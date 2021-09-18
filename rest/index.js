const express = require("express");
const app = express();
const PORT = 8080;

app.use( express.json() );

app.listen(
  PORT,
  () => console.log(`started api (endpoint baseURI: http://localhost:${PORT}/)`)
);

app.get("/articles", (req, res) => {
  res.status(200).send({
    title: "テスト記事",
    postdate: "2021-09-20",
    content: "記事本文"
  })
});

app.post(("/create/:id"), (req, res) => {
  
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title) {
    res.status(400).send({ message: "Title is empty." });
  }
  if (!content) {
    res.status(400).send({ message: "Content is empty." });
  }

  res.send({ "message": "Successfully created." });
});

