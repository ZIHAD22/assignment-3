import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import sendRes from "./app/util/sendRes/sendRes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
const app: Application = express();

// use
app.use(cors());
app.use(express.json());

// main router
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  sendRes({ res, statusCode: 200, message: "Server is running", data: {} });
});

app.use(globalErrorHandler);

app.use("*", notFound);

export default app;
