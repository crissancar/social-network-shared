import { ApiKeyAudiences } from '../enums/api-key-audiences.enum';

export class AuthenticateApiKeyResponseInterface {
	readonly key: string;

	readonly audience: ApiKeyAudiences;
}
