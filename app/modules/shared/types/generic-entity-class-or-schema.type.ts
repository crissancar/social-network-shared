/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { EntitySchema } from 'typeorm';

export type GenericEntityClassOrSchema<T> = Function | EntitySchema<T>;
