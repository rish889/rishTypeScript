// primitive types - number, bigint, string, boolean, null, undefined, symbol

let employee1: object = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};




let employee2: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};




console.log(employee2);
console.log(employee2.valueOf());
console.log(employee2.toString());




// The object type represents all non-primitive values while the Object type describes the functionality of all objects.
// For example, the Object type has the toString() and valueOf() methods that can be accessible by any object.
// The empty type {} refers to an object that has no property on its own.
// let vacant: {};