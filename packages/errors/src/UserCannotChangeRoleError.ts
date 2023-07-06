import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class UserCannotChangeRoleError extends ErrorBase {
  constructor() {
    super({
      message: 'The user cannot change the role, because he is a mechanic.',
      code: 'UserCannotChangeRoleError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
