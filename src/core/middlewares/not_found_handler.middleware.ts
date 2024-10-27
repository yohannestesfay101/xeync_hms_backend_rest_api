import { Request, Response, NextFunction } from "express";
import { AppResponseHelper } from "../utils/app_response.utils";

export const notFoundHandlerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const method = req.method;
  const url = req.originalUrl;

  const message = `The requested URL '${url}' with method '${method}' does not exist. Please check the path and ensure you are using the correct HTTP method (GET, POST, PUT, DELETE, etc.).`;

  AppResponseHelper.sendErrorResponse(res, "Route not found", [
    { code: 404, message: message },
  ]);
};
