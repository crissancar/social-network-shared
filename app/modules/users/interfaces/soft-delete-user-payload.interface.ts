import { EventPayload } from '../../shared/interfaces/event-payload.interface';
import { SoftDeleteUserRequestInterface } from './soft-delete-user-request.interface';

export interface SoftDeleteUserPayload extends EventPayload<SoftDeleteUserRequestInterface> {}
