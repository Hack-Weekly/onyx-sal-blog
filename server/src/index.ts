// Module Imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// Routers
import blogRouter from "./routes/posts.js";
import tagRouter from "./routes/tags.js";
import githubRouter from "./routes/github.js";
import userRouter from "./routes/users.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Welcome to the Onyx Salemander Blog API!");
});

app.use("/api", blogRouter);
app.use("/api", tagRouter);
app.use("/api", userRouter);
app.use("/api", githubRouter);

app.listen(8000, () => console.log("🚀 Server now live at http://localhost:8000"));
