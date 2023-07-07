import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class UserCannotBeMechanicError extends ErrorBase {
  constructor() {
    super({
      message: 'User cannot be mechanic.',
      code: 'UserCannotBeMechanicError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
