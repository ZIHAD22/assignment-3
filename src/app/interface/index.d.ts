import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      data: {
        durationHours?: number;
        jwtDU?: {
          _id: string;
          role: string;
          iat: number;
          exp: number;
        };
      };
    }
  }
}
