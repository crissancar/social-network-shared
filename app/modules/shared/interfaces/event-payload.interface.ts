export interface EventPayload<T> {
	data: {
		id: string;
		type: string;
		occurredOn: Date;
		attributes: T;
		meta: {
			correlation: string;
			[key: string]: unknown;
		};
	};
}
