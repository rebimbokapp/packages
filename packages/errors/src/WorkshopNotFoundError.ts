import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class WorkshopNotFoundError extends ErrorBase {
  constructor() {
    super({
      message: 'Workshop does not exists.',
      code: 'WorkshopNotFoundError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
