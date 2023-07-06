import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class ValidationError extends ErrorBase {
  constructor(errors: any[]) {
    super({
      message: 'Fields in need of attention',
      code: 'ValidationError',
      status: StatusCodes.BAD_REQUEST,
      data: {
        errors,
      },
    });
  }
}
