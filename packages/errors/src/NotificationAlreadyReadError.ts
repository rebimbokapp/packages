import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class NotificationAlreadyReadError extends ErrorBase {
  constructor() {
    super({
      message: 'The notification has already been marked as read.',
      code: 'NotificationAlreadyReadError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
