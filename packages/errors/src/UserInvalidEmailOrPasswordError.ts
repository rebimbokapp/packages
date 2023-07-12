import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class UserInvalidEmailOrPasswordError extends ErrorBase {
  constructor() {
    super({
      message: `Invalid e-mail/password combination`,
      code: 'UserInvalidEmailOrPasswordError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
