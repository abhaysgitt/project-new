//create server
const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");

const app = express();
app.use(express.json());   //middleware to parse JSON request bodies
app.use(cookieParser());   //middleware to parse cookies


app.get("/", (req, res) => {
  res.send("Hello Abhay!");
});
app.use("/api/auth", authRoutes);  // Use authentication routes

module.exports = app;