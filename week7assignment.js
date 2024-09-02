// item 1
// array with the given values
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// subtract the value of the first element from the last element
let difference = ages[ages.length - 1] - ages[0];
console.log("Difference between the last and first element:", difference);

// add a new age to the array
ages.push(45);

// recalculate the difference to test
difference = ages[ages.length - 1] - ages[0];
console.log("New difference after adding a new age:", difference);

// calculate the average age using a loop
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}

let averageAge = sum / ages.length;

// item 2

// array with the given names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// calculate the average number of letters per name
let totalLetters = 0;

for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}

let averageLetters = totalLetters / names.length;
console.log("Average number of letters per name:", averageLetters);

// names together, separated by spaces
let concatenatedNames = "";

for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i];
    if (i < names.length - 1) {
        concatenatedNames += " ";
    }
}

console.log("Concatenated names:", concatenatedNames);

// item 3
// how do you access the last element of any array?  
let lastElement = array[array.length - 1];

// item 4
// how do you access the first element of any array?
let firstElement = array[0];

//item 5
// array with the given names
let names = ["Kelly", "Sam", "Kate"];

// empty array to store the lengths of each name
let nameLengths = [];

// loop through the names array
for (let i = 0; i < names.length; i++) {
    // add the length of each name to the nameLengths array
    nameLengths.push(names[i].length);
}

// otput the nameLengths array to verify the result
console.log(nameLengths); // Output: [5, 3, 4]

// item 6


// item7
let concatenatedWord = repeatWord('Hello', 3);
console.log(concatenatedWord); // Output: 'HelloHelloHello'

// item 8
let fullName = getFullName('John', 'Doe');
console.log(fullName); // Output: 'John Doe'

// item 9
let numbersArray = [10, 20, 30, 40, 5];
let result = isSumGreaterThan100(numbersArray);
console.log(result); // Output: true

// item 10
let numbersArray = [10, 20, 30, 40, 50];
let average = calculateAverage(numbersArray);
console.log(average); // Output: 30

//item 11
let array1 = [10, 20, 30, 40, 50];
let array2 = [5, 15, 25, 35, 45];
let result = isFirstArrayAverageGreater(array1, array2);
console.log(result); // Output: true

// item 12
let result = willBuyDrink(true, 15.00);
console.log(result); // Output: true

result = willBuyDrink(true, 9.00);
console.log(result); // Output: false

// item 13
