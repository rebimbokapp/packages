import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class SolicitationAlreadyClosedError extends ErrorBase {
  constructor() {
    super({
      message: 'Solicitation already closed.',
      code: 'SolicitationAlreadyClosedError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
