import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class JWTTokenExpiredError extends ErrorBase {
  constructor() {
    super({
      message: 'The JWT token is expired.',
      code: 'JWTTokenExpiredError',
      status: StatusCodes.UNAUTHORIZED,
    });
  }
}
