import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class SolicitationAlreadyAcceptedError extends ErrorBase {
  constructor() {
    super({
      message: 'Solicitation already accepted.',
      code: 'SolicitationAlreadyAcceptedError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
