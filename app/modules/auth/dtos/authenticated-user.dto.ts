import { UserAudiences } from '../../users/enums/user-audiences.enum';

export class AuthenticatedUser {
	readonly correlation: never;

	readonly id: string;

	readonly name: string;

	readonly email: string;

	readonly audiences: Array<UserAudiences>;
}
