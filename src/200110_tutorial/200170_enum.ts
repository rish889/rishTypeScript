// A TypeScript enum is a group of constant values.
// Under the hood, an enum is a JavaScript object with named properties declared in the enum definition.
// Do use an enum when you have a small set of fixed values that are closely related and known at compile time.
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};


function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}


console.log(isItSummer(Month.Jun)); // true
console.log(isItSummer(6)); // true