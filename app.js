const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Demo Application Running");
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Application is healthy",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
