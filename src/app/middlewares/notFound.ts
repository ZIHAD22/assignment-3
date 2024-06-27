import { RequestHandler } from "express";
import sendRes from "../util/sendRes/sendRes";

const notFound: RequestHandler = (req, res) => {
  sendRes({ res, message: "Route Not Found", statusCode: 404, data: {} });
};

export default notFound;
