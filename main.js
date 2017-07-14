// Object as Dictionary Exercises

// Exercise 1

// Given the following dictionary, representing a mapping from names to phone numbers:

var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
}

// Write code to do the following:

// Print Elizabeth's phone number:
phonebookDict['Elizabeth'];

// Add a entry to the dictionary: Kareem's number is 938-489-1234:
phonebookDict["Kareem"] = '938-489-1234';

// Delete Alice's phone entry:
delete phonebookDict['Alice'];

// Change Bob's phone number to '968-345-2345':
phonebookDict['Bob'] = '968-345-2345';

// Given this code var personName = 'Elizabeth';, use the variable personName to access the dictionary entry:
var personName = 'Elizabeth';

// Use a for...in loop to print all the phone entries:
for (i in phonebookDict) {
    // console.log(phonebookDict[i]);
}

// ---------------------------------------------------------------

// Letter Histogram

// Write a function letterHistogram which takes a string as argument. It will tally(histogram) the number of times each 
// character appears in the string, and return the tally as an object. Example:

// > letterHistogram('bananas')
// { b: 1, a: 3, n: 2, s: 1 }
// Note: the order of the keys doesn't matter.


function letterHistogram(string) {
    var string = string.toLowerCase();
    var tally = {};
    for( var i = 0; i < string.length; i++) {
        if (string[i] == " ") {  
        }
        else if (!( string[i] in tally )){
            tally[string[i]] = 1
        } else {
            tally[string[i]] += 1;
        }
    }
    return tally;
}

letterHistogram('Hellooooo');


// ---------------------------------------------------------------


// Function Exercises

// Implement all of the following problems without using a while or a
//  for loop unless you were explicitly asked to use loops.

// #1 Positive Numbers:

// Write a function which takes an array of numbers as input and returns 
// a new array containing only the positive numbers in the given array.

var nums = [1, -1, -2, 34, 67, -13];
var posArr = [];

// //#1
function isPos(n) {
    return n > 0;
}

 posArr = nums.filter(isPos);
//  console.log(posArr);


//#2
 posArr = nums.filter(function (n) {
    return n > 0;
});


// //#3
 posArr = nums.filter((n) => {
    return n > 0;
});

// console.log(posArr);



// #2 Even Numbers:

// Write a function which takes an array of numbers as input and 
// returns a new array containing only the even numbers in the given array.

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 24, 56];;
var oddNum = [];

oddNum = nums.filter((n) => {
    return (n & 1) === 0;
});

// console.log(oddNum);


// #2a Odd Numbers:

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 24];
var oddNum = [];

oddNum = nums.filter((n) => {
    return n % 2;
});

// console.log(oddNum);


// #3 Cities 1:

// Write a function which takes an array of city objects 
// as input and returns a new array containing the cities whose 
// temperature is cooler than 70 degrees.

// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];


// var newArray = [];

// newArray = cities.filter((n) => {
//     return n.temperature < 70.0;
// });

// console.log(newArray);


// #3a Cities 2: NOT COMPLETED

// Write a function which takes an array of city objects like the 
// above problem as input and returns an array of the cities names.


// #4 Good Job:
// Given an array of people's names:
// Print out 'Good Job, {{name}}!' for each person's name, one on a line.

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

var goodJob = [];


goodJob = people.map((n) => {
    return ("Good job: " + n);
});

// console.log(goodJob.join("\n"));

goodJob.forEach((n) => {
    console.log(n);
})