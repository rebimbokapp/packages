import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class BudgetNotFoundError extends ErrorBase {
  constructor() {
    super({
      message: 'Budget does not exists.',
      code: 'BudgetNotFoundError',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
