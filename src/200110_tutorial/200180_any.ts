// any type allows you to store a value of any type. It instructs the compiler to skip type-checking.
// Use the any type to store a value that you don’t know its type at the compile-time or when you migrate a JavaScript project over to a TypeScript project.

let result1: any= 1;
result1 = 'Hello';

result1 = [1, 2, 3];
const total = result1.reduce((a: number, b: number) => a + b, 0); // 6


const json = `{"latitude": 10.11, "longitude":12.12}`;
const currentLocation = JSON.parse(json);
console.log(currentLocation.x); // undefined


let result2; // type any
result2 = 1; // type number
result2 = "" // type string


let result3: any = 10.123;
console.log(result3.toFixed()); // 10
// result3.willExist(); compiler doesn’t issue any warning. It might be available at runtime.


let result4: object;
// result4 = 10.123;    Type 'number' is not assignable to type 'object
// result4.toFixed();   Property 'toFixed' does not exist on type 'object's