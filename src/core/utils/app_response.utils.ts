import { Response } from "express";
import { AppResponseModel } from "../models/app_response.model";

export class AppResponseHelper {
  static sendSuccessResponse<T>(res: Response, message: string, data: T): void {
    const response: AppResponseModel<T> = {
      success: true,
      message: message,
      data: data,
      errors: null,
    };
    res.status(200).json(response);
  }

  static sendErrorResponse(
    res: Response,
    message: string,
    errors: { code: number; message: string }[]
  ): void {
    const response: AppResponseModel<null> = {
      success: false,
      message: message,
      data: null,
      errors: errors,
    };
    res.status(errors.length > 0 ? errors[0].code : 500).json(response);
  }
}
