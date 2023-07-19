import { StatusCodes } from 'http-status-codes';

import { ErrorBase } from './ErrorBase';

export class UserMustBeHaveRegisteredWorkshop extends ErrorBase {
  constructor() {
    super({
      message: 'User must be have registered workshop.',
      code: 'UserMustBeHaveRegisteredWorkshop',
      status: StatusCodes.BAD_REQUEST,
    });
  }
}
