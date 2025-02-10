import { AuthenticatedUser } from '../dtos/authenticated-user.dto';

export interface CreateUserTokensRequestInterface {
	correlation: never;

	authUser: AuthenticatedUser;
}
