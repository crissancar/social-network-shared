import { Exact } from '../../shared/types/exact.type';
import { FindByOptions } from '../../shared/types/find-by-options.type';
import { FindUserRequestInterface } from '../interfaces/find-user-request.interface';
import { User } from '../models/user.model';

export class FindUserByOptionsRequest
	implements Exact<FindUserRequestInterface, FindUserByOptionsRequest>
{
	readonly correlation: never;

	readonly options: FindByOptions<User>;

	constructor(options: FindByOptions<User>, correlation: never) {
		this.options = options;
		this.correlation = correlation;
	}

	static create(options: FindByOptions<User>, correlation: string): FindUserByOptionsRequest {
		return new FindUserByOptionsRequest(options, correlation as never);
	}
}
