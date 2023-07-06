import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class JWTTokenInvalidError extends ErrorBase {
  constructor() {
    super({
      message: 'The JWT token is invalid.',
      code: 'JWTTokenInvalidError',
      status: StatusCodes.UNAUTHORIZED,
    });
  }
}
