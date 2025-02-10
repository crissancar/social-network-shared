import { FindByOptions } from '../../shared/types/find-by-options.type';
import { User } from '../models/user.model';

export class FindUserRequestInterface {
	options: FindByOptions<User>;
}
