/**
 * The Exact type is used to ensure that a class does not have any additional properties
 * that are not in its interface.
 *
 * Exact takes two type parameters: Interface and Class. Class should be a subclass of Interface.
 *
 * If Class has a property that is not in Interface, TypeScript will throw a type error.
 * This error indicates that Class has a property that is not allowed, as it is not in Interface.
 */

export type Exact<Interface, Class extends Interface> = Interface & {
	[Key in Exclude<keyof Class, keyof Interface>]: never;
};
