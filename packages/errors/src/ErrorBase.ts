import { StatusCodes } from 'http-status-codes';

export interface ErrorObject {
  message: string;
  code: string;
  status: StatusCodes;
  data?: Record<string, any>;
}

export class ErrorBase {
  message: string;

  code: string;

  status: StatusCodes;

  data?: Record<string, any>;

  constructor({ message, code, status, data }: ErrorObject) {
    this.message = message;
    this.code = code;
    this.status = status;
    this.data = data;
  }

  toObject(): ErrorObject {
    return {
      message: this.message,
      code: this.code,
      status: this.status,
      data: this.data,
    };
  }
}
