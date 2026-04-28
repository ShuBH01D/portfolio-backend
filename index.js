const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const contactRoutes = require("./routes/contactRoutes");
app.use("/api", contactRoutes);

// server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});


