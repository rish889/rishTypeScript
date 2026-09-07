let skills: string[] = [];

skills[0] = "Problem Solving";
skills[1] = "Programming";
skills.push('Software Design');

skills = ['Problem Sovling', 'Programming', 'Software Design'];

let skill = skills[0];
typeof (skill); // string


let series = [1, 2, 3];
series.length // 3
let doubleIt = series.map(e => e * 2); // [ 2, 4, 6 ]


let scores: (string | number)[] = ['Programming', 5, 'Software Design', 4];