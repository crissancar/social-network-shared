import { SortColumn } from '../../shared/types/sort-column.type';
import { SortOrder } from '../../shared/types/sort-order.type';
import { User } from '../models/user.model';

export class FindUsersByCriteriaRequestInterface {
	name?: string;

	email?: string;

	keyword?: string;

	sortName?: string;

	sortColumn?: SortColumn<User>;

	sortOrder?: SortOrder;

	take?: number;

	page?: number;
}
