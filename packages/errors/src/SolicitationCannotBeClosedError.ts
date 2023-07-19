import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class SolicitationCannotBeClosedError extends ErrorBase {
  constructor() {
    super({
      message: 'The solicitation cannot be closed.',
      code: 'SolicitationCannotBeClosedError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
