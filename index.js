const express = require("express");
const cors = require("cors");

const app = express();

// 🔥 IMPORTANT CORS CONFIG
app.use(cors({
  origin: "*", // testing साठी
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// 🔥 Preflight handle (VERY IMPORTANT)
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const contactRoutes = require("./routes/contactRoutes");
app.use("/api", contactRoutes);

// root
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});