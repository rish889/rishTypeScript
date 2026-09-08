// union type allows you to store a value of one or several types in a variable.
let result: number | string | bigint;
result = 10; // OK
result = 'Hi'; // also OK
// result = false; compile time error