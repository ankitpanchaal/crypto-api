const express = require("express");
const data = require("./data.json");
const app = express();
const PORT = 3000;

// API endpoint to handle GET requests
app.get("/", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
