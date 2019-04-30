const express = require("express");
const cors = require("cors");

const PORT = 4000;

const app = express();

app.use(cors());

app.get("/joke", (req, res) => {
  const jokes = [
    "Today at the bank, an old lady asked me to help check her balance. So I pushed her over.",
    "I'm so good at sleeping. I can do it with my eyes closed.",
    "My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away."
  ];

  res.json({
    joke: jokes[Math.floor(Math.random() * jokes.length)]
  });
});

app.listen(PORT, err => {
  if (err) {
    return console.log(err);
  }

  return console.log(`Server is listening at port ${PORT}`);
});
