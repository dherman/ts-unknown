# The `unknown` type

This repo defines a TypeScript type called `unknown`. Like `any`,
`unknown` applies to all JavaScript values, but it results in
much stricter type checking. For example, extracting properties
from an object of type `any` results in another `any` value:

```
let a: any = { foo: "bar" };

a.foo // any
```

By contrast, you can't even extract a property from the type
`unknown` without asserting it to be an object first:

```
let u: unknown = { foo: "bar" };

// a.foo // type error
(a as { foo: string }).foo // string
```
