import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class ChannelNotFoundError extends ErrorBase {
  constructor() {
    super({
      message: 'Channel does not exists.',
      code: 'ChannelNotFoundError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
