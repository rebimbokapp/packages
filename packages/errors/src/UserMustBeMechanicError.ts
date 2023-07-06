import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class UserMustBeMechanicError extends ErrorBase {
  constructor() {
    super({
      message: 'User must be mechanic.',
      code: 'UserMustBeMechanicError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
