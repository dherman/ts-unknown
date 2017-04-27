import Dict from 'ts-dict';

export namespace unknown {
    /** The type of primitive (non-object) values. */
    export type primitive = boolean | number | string | symbol | null | undefined;

    /** Tests a value of `unknown` type to see if it's an object, narrowing the type to `object`. */
    export function isObject(x: unknown): x is object {
        return typeof x === 'object' && !!x;
    }

    /** Tests a value of `unknown` type to see if it's an object, narrowing the type to `Dict<unknown>`. */
    export function isDict(x: unknown): x is Dict<unknown> {
        return typeof x === 'object' && !!x;
    }

    /** Tests a value of `unknown` type to see if it's a primitive, narrowing the type to `primitive`. */
    export function isPrimitive(x: unknown): x is primitive {
        return typeof x !== 'object' || !x;
    }
}

/** An opaque type that matches all JS values, like `any` but with stricter type checking. */
export type unknown = object | unknown.primitive | void;

export default unknown;
