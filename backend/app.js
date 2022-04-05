const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const oraganisers = require("./routes/oragniser");
const eventRegister = require("./routes/eventRegister");
const admin = require("./routes/admin");
const gallery = require("./routes/gallery");

dotenv.config({ path: "backend/config/config.env" });
const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json({ limit: "60mb" }));

// API's
app.use("/api/organisers", oraganisers);
app.use("/api/register", eventRegister);
app.use("/api/gallery", gallery);
app.use("/api/admin", admin);

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

module.exports = app;
