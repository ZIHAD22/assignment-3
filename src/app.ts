import express, { Application } from "express";
import cors from "cors";
import router from "./app/routes";
const app: Application = express();

// use
app.use(cors());
app.use(express.json());

// main router
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
