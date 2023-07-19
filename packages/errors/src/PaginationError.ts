import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class PaginationError extends ErrorBase {
  constructor() {
    super({
      message: 'Page does not exists.',
      code: 'PaginationError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
