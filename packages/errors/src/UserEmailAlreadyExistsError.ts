import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class UserEmailAlreadyExistsError extends ErrorBase {
  constructor(email: string) {
    super({
      message: `The email "${email}" is already registered.`,
      code: 'UserEmailAlreadyExistsError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
