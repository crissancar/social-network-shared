import { EventPayload } from '../interfaces/event-payload.interface';
import { Uuid } from './uuid.service';

interface Request {
	correlation: never;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export class EventPayloadFactory {
	static create<T extends Request>(type: string, request: T): EventPayload<T> {
		const id = Uuid.random();
		const occurredOn = new Date();
		const { correlation } = request;
		delete request.correlation;
		const attributes = { ...request };
		const meta = { correlation };

		return {
			data: { id, type, occurredOn, attributes, meta },
		};
	}
}
