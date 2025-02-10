import { FindUserResponseInterface } from './find-user-response.interface';

export class FindUsersByCriteriaResponseInterface {
	data: Array<FindUserResponseInterface>;

	count: number;

	currentCount: number;

	take: number;

	page: number;
}
