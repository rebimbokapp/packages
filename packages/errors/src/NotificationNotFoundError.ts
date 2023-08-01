import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class NotificationNotFoundError extends ErrorBase {
  constructor() {
    super({
      message: 'Notification does not exists.',
      code: 'NotificationNotFoundError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
