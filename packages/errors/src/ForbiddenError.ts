import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class ForbiddenError extends ErrorBase {
  constructor() {
    super({
      message: 'Prohibited access.',
      code: 'ForbiddenError',
      status: StatusCodes.FORBIDDEN,
    });
  }
}
