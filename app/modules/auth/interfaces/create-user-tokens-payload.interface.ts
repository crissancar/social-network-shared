import { EventPayload } from '../../shared/interfaces/event-payload.interface';
import { CreateUserTokensRequestInterface } from './create-user-tokens-request.interface';

export interface CreateUserTokensPayload extends EventPayload<CreateUserTokensRequestInterface> {}
