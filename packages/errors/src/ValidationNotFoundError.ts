import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class ValidationNotFoundError extends ErrorBase {
  constructor() {
    super({
      message: 'Validation does not exists.',
      code: 'ValidationNotFoundError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
