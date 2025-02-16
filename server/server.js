const express = require("express");
const path = require("path");

const app = express();
const distPath = path.join(__dirname, "..", "dist");

// Serve static files from 'dist'
app.use(express.static(distPath));

// Handle React Router (or other SPA) routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
