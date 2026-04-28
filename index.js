const express = require("express");
const cors = require("cors");

const app = express();

// 🔥 VERY IMPORTANT (put at TOP)
app.use(cors({
  origin: "*"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const contactRoutes = require("./routes/contactRoutes");
app.use("/api", contactRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});