import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class ImageNotFoundError extends ErrorBase {
  constructor() {
    super({
      message: 'Image does not exists.',
      code: 'ImageNotFoundError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
