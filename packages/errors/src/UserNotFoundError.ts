import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class UserNotFoundError extends ErrorBase {
  constructor() {
    super({
      message: 'User does not exists.',
      code: 'UserNotFoundError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
