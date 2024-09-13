import express from "express";
// import connectDB from "./config/db.js";

// middleware imports
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import connectDB from "./config/db.js";
// import { ErrorHandler } from "./middleware/errorHandler.js";

import habitRoute from "./routes/habitRoute.js";

const app = express();
dotenv.config();
connectDB();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CLIENT_URL
        : "http://localhost:5173",
    credentials: true,
  })
);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();

  app.use(express.static(path.join(__dirname, "frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  // server react app
  app.get("/", (req, res) => res.send("Server is ready..."));
}

// json api
app.get("/api", function (req, res) {
  res.send("Api is ready...");
});

app.use("/api/habits", habitRoute);
// app.use(ErrorHandler);

app.get("*", function (req, res) {
  res.send("Page not found...");
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something broke...");
});

app.listen(process.env.PORT, () => {
  console.log("SERVER STARTS AT:", process.env.PORT);
  console.log("NODE_ENV:", process.env.NODE_ENV);
});
