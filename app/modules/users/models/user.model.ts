import { Timestamp } from '../../shared/models/timestamp.model';
import { UserAudiences } from '../enums/user-audiences.enum';

export class User extends Timestamp {
	id: string;

	name: string;

	email: string;

	password: string;

	audiences: Array<UserAudiences>;

	constructor(
		id: string,
		name: string,
		email: string,
		password: string,
		audiences: Array<UserAudiences>,
	) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.audiences = audiences;
	}
}
