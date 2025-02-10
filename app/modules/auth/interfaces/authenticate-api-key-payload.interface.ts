import { EventPayload } from '../../shared/interfaces/event-payload.interface';
import { AuthenticateApiKeyRequestInterface } from './authenticate-api-key-request.interface';

export interface AuthenticateApiKeyPayload
	extends EventPayload<AuthenticateApiKeyRequestInterface> {}
