// never type holds no value. It is like an empty set.
// you cannot assign a value to a variable with the never type.
// let empty: never = 'hello'; Compile Error


// Since the never type has zero value, you can use it to denote an impossibility in the type system.
// For example, you may have an intersection type that can be both a string and a number at the same time, which is impossible:
type Alphanumeric = string & number; // never
// Therefore, the TypeScript compiler infers the type of Alphanumeric as never.


// Typically, you use the never type to represent the return type of a function that never returns the control to the caller.
// For example, a function that always throws an error:
function raiseError(message: string): never {
    throw new Error(message);
}


// If you have a function that contains an indefinite loop, its return type should be never. For example:
function forever(): never {
    while (true) {
    }
}