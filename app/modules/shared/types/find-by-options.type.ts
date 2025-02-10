export interface SelectOptions {
	columns: Array<string>;
	relations?: Array<string>;
}

export interface FindByOptions<T> {
	key: keyof T;
	value: T[keyof T];
	selectOptions: SelectOptions;
}
