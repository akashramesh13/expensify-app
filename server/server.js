const express = require("express");
const path = require("path");
const app = express();

// Serve the static files (HTML, images, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));
app.use("/.build", express.static(path.join(__dirname, "..", ".build")));

const publicPath = path.join(__dirname, "..", "public");
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
