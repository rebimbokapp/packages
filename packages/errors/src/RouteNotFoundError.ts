import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class RouteNotFoundError extends ErrorBase {
  constructor() {
    super({
      message: 'Route does not exists.',
      code: 'RouteNotFoundError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
