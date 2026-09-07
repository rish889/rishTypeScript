// unknown type can hold a value that is not known upfront but requires type checking

let result1: unknown;
result1 = 1;
result1 = 'hello';
result1 = false;
result1 = Symbol();
result1 = { name: 'John' };
result1 = [1, 2, 3];


let result2: unknown;
result2 = [1, 2, 3];
const total = (result2 as number[]).reduce((a: number, b: number) => a + b, 0); // 6

// The unknown type is like any type but more restrictive.
// Used when handling data from external sources (API calls, databases, ..) where type validation is necessary.