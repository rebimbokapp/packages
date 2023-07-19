import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class ChannelClosedError extends ErrorBase {
  constructor() {
    super({
      message: 'Unable to join the channel as it is closed.',
      code: 'ChannelClosedError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
