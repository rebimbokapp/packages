import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class UserAlreadyExistsError extends ErrorBase {
  constructor() {
    super({
      message: 'User already registered.',
      code: 'UserAlreadyExistsError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
