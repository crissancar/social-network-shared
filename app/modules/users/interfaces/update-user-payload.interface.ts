import { EventPayload } from '../../shared/interfaces/event-payload.interface';
import { UpdateUserRequestInterface } from './update-user-request.interface';

export interface UpdateUserPayload extends EventPayload<UpdateUserRequestInterface> {}
