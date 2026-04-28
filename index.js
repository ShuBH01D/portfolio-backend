const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://portfolio-frontend-ox55bgv4e-shubh01ds-projects.vercel.app"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", require("./routes/userRoutes"));

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// port fix (Render safe)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});