import http from "http";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import "dotenv/config";

import { errorHandlerMiddleware } from "./core/middlewares/error_handler.middleware";
import { notFoundHandlerMiddleware } from "./core/middlewares/not_found_handler.middleware";
import { AppResponseHelper } from "./core/utils/app_response.utils";

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.all("/", (req: Request, res: Response, next: NextFunction) => {
  AppResponseHelper.sendSuccessResponse(
    res,
    "Fantastic news! The test ran successfully! 🎉 Everything is working perfectly!",
    {
      project: "hotel management system",
      coder: {
        name: "yohannes tesfay",
        dateOfBirth: new Date("03 April 1999 16:30"),
        netWorth: 0,
      },
    }
  );
});

// here goes all API routes

// & here it ends

app.use(notFoundHandlerMiddleware);
app.use(errorHandlerMiddleware);

const server = http.createServer(app);

server.listen(8080, () => {
  console.log(`Server is running on http://localhost:8080`);
});
