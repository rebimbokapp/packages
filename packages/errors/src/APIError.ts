import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class APIError extends ErrorBase {
  constructor() {
    super({
      message: 'There was an unknown error in the API.',
      code: 'APIError',
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
}
