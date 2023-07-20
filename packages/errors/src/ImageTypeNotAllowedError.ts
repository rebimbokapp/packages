import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class ImageTypeNotAllowedError extends ErrorBase {
  constructor() {
    super({
      message: 'Unsupported image type.',
      code: 'ImageTypeNotAllowedError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
