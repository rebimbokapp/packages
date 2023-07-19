import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class UserRoleMustBeAdminError extends ErrorBase {
  constructor() {
    super({
      message: 'Your role must be admin.',
      code: 'UserRoleMustBeAdminError',
      status: StatusCodes.FORBIDDEN,
    });
  }
}
