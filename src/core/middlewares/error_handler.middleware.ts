import { Request, Response, NextFunction } from "express";
import { AppResponseHelper } from "../utils/app_response.utils";

export const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";
  const errors = err.errors || [{ code: statusCode, message }];

  AppResponseHelper.sendErrorResponse(res, message, errors);
};
