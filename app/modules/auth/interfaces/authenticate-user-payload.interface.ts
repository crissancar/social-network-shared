import { EventPayload } from '../../shared/interfaces/event-payload.interface';
import { LoginUserRequestInterface } from './login-user-request.interface';

export interface AuthenticateUserPayload extends EventPayload<LoginUserRequestInterface> {}
