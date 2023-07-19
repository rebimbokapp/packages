import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class UserAlreadyJoinInChannelError extends ErrorBase {
  constructor() {
    super({
      message: 'You already joined this channel.',
      code: 'UserAlreadyJoinInChannelError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
