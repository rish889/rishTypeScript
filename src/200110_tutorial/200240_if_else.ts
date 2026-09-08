const max = 100;
let counter = 100;
counter < max ? counter++ : counter = 1;


let discount: number;
let itemCount = 11;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5;
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10;
} else if (itemCount > 10) {
    discount = 15;
} else {
    throw new Error('The number of items cannot be negative!');
}