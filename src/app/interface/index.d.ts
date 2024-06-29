import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      data: {
        durationHours: number;
      };
    }
  }
}
