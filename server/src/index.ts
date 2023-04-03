// Module Imports
import express from "express";
import cors from "cors";

// Routers
import blogRouter from "./routes/posts.js";
import tagRouter from "./routes/tags.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Welcome to the Onyx Salemander Blog API!");
});

app.use("/api", blogRouter);
app.use("/api", tagRouter);

app.listen(8000, () => console.log("🚀 Server now live at http://localhost:8000"));
