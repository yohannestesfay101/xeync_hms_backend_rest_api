export interface AppResponseModel<T> {
  success: boolean;
  message: string;
  data: T | null;
  errors: { code: number; message: string }[] | null;
}
