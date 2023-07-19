import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class BadRequestError extends ErrorBase {
  constructor() {
    super({
      message: 'Bad request.',
      code: 'BadRequestError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
