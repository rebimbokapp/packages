import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class MessageNotFoundError extends ErrorBase {
  constructor() {
    super({
      message: 'Message does not exists.',
      code: 'MessageNotFoundError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
