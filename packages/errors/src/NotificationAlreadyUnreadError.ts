import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class NotificationAlreadyUnreadError extends ErrorBase {
  constructor() {
    super({
      message: 'The notification has already been marked as unread.',
      code: 'NotificationAlreadyUnreadError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
