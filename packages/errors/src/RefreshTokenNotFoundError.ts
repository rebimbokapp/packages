import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class RefreshTokenNotFoundError extends ErrorBase {
  constructor() {
    super({
      message: 'Refresh token does not exists.',
      code: 'RefreshTokenNotFoundError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
