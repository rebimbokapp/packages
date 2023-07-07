import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class SolicitationNotFoundError extends ErrorBase {
  constructor() {
    super({
      message: 'Solicitation does not exists.',
      code: 'SolicitationNotFoundError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
