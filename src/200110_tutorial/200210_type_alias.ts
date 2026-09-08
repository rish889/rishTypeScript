// Primitive types
type Name = string;
let firstName: Name = "";
console.log(typeof (firstName)); // string


// Object types
type Person = {
    name: string;
    age: number;
};
let person: Person = {
    name: 'John',
    age: 25
};


// Union Types
type alphanumeric = string | number;
let input: alphanumeric;
input = 100;
input = 'Hi';
// input = false; Compiler error


// Intersection Types
type Personal = {
    name: string;
    age: number;
};
type Contact = {
    email: string;
    phone: string;
};
type Candidate = Personal & Contact;
let candidate: Candidate = {
    name: "Joe",
    age: 25,
    email: "joe@example.com",
    phone: "(408)-123-4567"
};