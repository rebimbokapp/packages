import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class SolicitationAlreadyRejectedError extends ErrorBase {
  constructor() {
    super({
      message: 'Solicitation already rejected.',
      code: 'SolicitationAlreadyRejectedError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
