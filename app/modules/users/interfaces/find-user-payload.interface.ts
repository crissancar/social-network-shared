import { EventPayload } from '../../shared/interfaces/event-payload.interface';
import { FindUserRequestInterface } from './find-user-request.interface';

export interface FindUserPayload extends EventPayload<FindUserRequestInterface> {}
