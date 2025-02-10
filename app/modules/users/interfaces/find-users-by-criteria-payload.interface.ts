import { EventPayload } from '../../shared/interfaces/event-payload.interface';
import { FindUsersByCriteriaRequestInterface } from './find-users-by-criteria-request.interface';

export interface FindUsersByCriteriaPayload
	extends EventPayload<FindUsersByCriteriaRequestInterface> {}
