const pending: boolean = true;
const notPending = !pending; // false

const hasError: boolean = false;
const completed: boolean = true;

let result = completed && hasError; // false
result = completed || hasError; // true