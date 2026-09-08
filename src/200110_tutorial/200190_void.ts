// Use the void type as the return type of functions that do not return any value.
function log(message: any): void {
    console.log(message);
}


let useless: void = undefined; // if variable has void type, you can only assign undefined
// useless = 1;     error
// useless = null;  OK if --strictNullChecks is not specified