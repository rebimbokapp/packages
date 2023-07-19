export * from './ErrorBase';

export * from './APIError';
export * from './ForbiddenError';
export * from './ValidationError';
export * from './JWTTokenExpiredError';
export * from './JWTTokenInvalidError';
export * from './RouteNotFoundError';
export * from './ValidationNotFoundError';
export * from './PaginationError';

export * from './UserEmailAlreadyExistsError';
export * from './UserNotFoundError';
export * from './UserInvalidEmailOrPasswordError';
export * from './UserRoleMustBeMechanicError';
export * from './UserRoleMustBeAdminError';
export * from './UserRoleMustBeUserError';
export * from './UserCannotChangeRoleError';
export * from './UserAlreadyJoinInChannelError';
export * from './UserAlreadyExistsError';

export * from './WorkshopNotFoundError';
export * from './WorkshopCorporateNameAlreadyExistsError';

export * from './OfferNotFoundError';

export * from './RefreshTokenNotFoundError';

export * from './BudgetNotFoundError';

export * from './SolicitationNotFoundError';
export * from './SolicitationAlreadyAcceptedError';
export * from './SolicitationAlreadyRejectedError';

export * from './MessageNotFoundError';

export * from './ChannelNotFoundError';
export * from './ChannelClosedError';

export * from './SocketNotFoundError';
