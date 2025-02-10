import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { ValidationException } from '../exceptions/validation.exception';

export class ClassValidator {
	static async validate(dtoClass: new () => object, object: object): Promise<object> {
		const validationDto = plainToInstance(dtoClass, object);
		const errors = await validate(validationDto);
		if (errors.length > 0) {
			throw new ValidationException(errors);
		}

		return validationDto;
	}
}
