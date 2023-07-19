import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class UserRoleMustBeUserError extends ErrorBase {
  constructor() {
    super({
      message: 'Your role must be user.',
      code: 'UserRoleMustBeUserError',
      status: StatusCodes.FORBIDDEN,
    });
  }
}
