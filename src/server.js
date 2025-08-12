require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const hobbyGroupsModel = require("./models/hobbyGroupsModel");
const hobbyGroupsRoutes = require("./routes/hobbyGroupsRoutes");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB and inject collection into model
connectDB().then(async (db) => {
  await hobbyGroupsModel.injectDB(db);
});

// Routes
app.use("/api", hobbyGroupsRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Sushi server is running");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
