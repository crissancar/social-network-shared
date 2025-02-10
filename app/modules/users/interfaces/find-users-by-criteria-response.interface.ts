import { User } from "../models/user.model";

export class FindUsersByCriteriaResponseInterface {
	data: Array<User>;

	count: number;

	currentCount: number;

	take: number;

	page: number;
}
