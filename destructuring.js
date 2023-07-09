/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Not using destructuring
// let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
// console.log(john, mary, joe);

// Destructuring arrays
let ages = [30, 26, 27];
let [john, mary, joe] = ages;
// console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
// console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
// console.log(johnNative, johnSecondary);

// Using commas to select languages other than the first two
let [, , maryNative, , marySecondary] = languages;
// console.log(maryNative, marySecondary);

// Destructuring subsets when working with objects
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let {firstLanguage, thirdLanguage} = languages2;
// console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
// console.log(favourite);
// console.log(secondFavourite);
// console.log(others);

// Using rest parameter syntax when working with objects
let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "chilli",
    andrea: "steak",
};
let {brian, anna, ...other} = favouriteFoods;
// console.log(brian);
// console.log(anna);
// console.log(other);


// Challenge - Create 3 variables using destructuring on an array
// returned from a function. The 1st and 2nd variables will be the 
// first 2 items in the array and the final one will be the remainder
// of the items in the array.  Create an arrow function, which returns
// an array containing all the subjects for whichever student's name is
// supplied when the funciton is called.

let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

// Declare a variable named makeList using the const keyword
// and assign it to an arrow function with arr & student as parameters
const makeList = (arr, student) => {
    // return an array of the subjects for the student passed into the
    // function when called
    for (let dict of arr) {
        if (student == dict.name) {
            return dict.subjects
        }
    }
};
// Using destructuring on the return value from calling the function and 
// passing in the students array, and the string 'John', create 3 variables
// named: first, second, rest using the keyword let
let [first, second, ...rest] = makeList(students, "John");
// Log out the values first, second and rest to view their values.
console.log(first, second, rest);