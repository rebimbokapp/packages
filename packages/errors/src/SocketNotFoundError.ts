import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class SocketNotFoundError extends ErrorBase {
  constructor() {
    super({
      message: 'Socket does not exists.',
      code: 'SocketNotFoundError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
