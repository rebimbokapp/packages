import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class WorkshopCorporateNameAlreadyExistsError extends ErrorBase {
  constructor(corporateName: string) {
    super({
      message: `The corporate name "${corporateName}" is already registered.`,
      code: 'WorkshopCorporateNameAlreadyExistsError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
