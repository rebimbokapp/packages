import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class OfferNotFoundError extends ErrorBase {
  constructor() {
    super({
      message: 'Offer does not exists.',
      code: 'OfferNotFoundError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
