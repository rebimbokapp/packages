import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class UserRoleMustBeMechanicError extends ErrorBase {
  constructor() {
    super({
      message: 'Your role must be mechanic.',
      code: 'UserRoleMustBeMechanicError',
      status: StatusCodes.FORBIDDEN,
    });
  }
}
