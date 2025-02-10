import { EventPayload } from '../../shared/interfaces/event-payload.interface';
import { CreateUserRequestInterface } from './create-user-request.interface';

export interface CreateUserPayload extends EventPayload<CreateUserRequestInterface> {}
