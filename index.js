const express = require("express");
const cors = require("cors");

const app = express();

// ✅ CORS (proper config)
const corsOptions = {
  origin: "*", // production मध्ये specific URL दे
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));

// ✅ IMPORTANT: preflight handle
app.options("/api/*", cors(corsOptions));

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