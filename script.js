// addition checkpoint
function sumOfTwo(num1, num2) {
  console.log("in <sumOfTwo>");
  return num1 + num2;
}

// testing sumOfTwo
// let test1 = sumOfTwo(2, 3);
// console.log("should be 5:", test1);
// testing sumOfTwo with negative number
// let test2 = sumOfTwo(2, -7);
// console.log("should be 9:", test2);

// conditional checkpoint
function toCompare(num1, num2) {
  console.log("in <toCompare>");
  if (num1 > num2) {
    return "The first number was bigger!";
  }
  if (num1 < num2) {
    return "The second number was bigger!";
  }
  if (num1 == num2) {
    return "The numbers are the same!";
  }
}

// testing toCompare, num1 > num2
// console.log(toCompare (3, 2));
// testing toCompare, num1 < num2
// console.log(toCompare (2, 7));
// testing toCompare, num1 = num2
// console.log(toCompare (7, 7));

// array checkpoint

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10, 11, 12];

// function takes array as parameter
function firstLastSum(array) {
  //
  let arraySum = array[0] + array[array.length - 1];
  // return sum of first and last array index
  return arraySum;
}

// testing firstLastSum
// console.log("should be 6:", firstLastSum(array1));
// console.log("should be 18:", firstLastSum(array2));

// loops, arrays, concatenation checkpoint

// function to accept 2 parameters; first is an array, second is a number
// loop through array and copy values
// starting index is the number parameter
// ending is last index of the array
// return a concatenated string with values of array indexes
// don't forget a space in returned string!

let gibberish = ["ASDF", "BLAH", "Oh!", "Hi", "There!"]; // array

function concatenator(array, number) {
  console.log("in <concatenator>");

  let result = "";

  for (let wordIndex in array) {
    // console.log(index);
    if (wordIndex >= number) {
      result += `${array[wordIndex]} `;
      // console.log(result)
    } // end if
  } // end for in
  return result;
}

// testing example 1
// console.log(concatenator(gibberish, 3));
// // testing example 2
// console.log(concatenator(gibberish, 2));

// looping through arrays of objects checkpoint

// function to accept an array of objects
// copy property from each object
// return sum of all properties

let employeeGroup1 = [
  { name: "Tony", yearsOfExperience: 10 },
  { name: "Carla", yearsOfExperience: 4 },
  { name: "Kris", yearsOfExperience: 14 },
];

let employeeGroup2 = [
  { name: "Tony", yearsOfExperience: 10 },
  { name: "Carla", yearsOfExperience: 4 },
];

function sumOfYearsExperience(array) {
  let totalYears = 0;
  for (let employee of array) {
    totalYears += employee.yearsOfExperience;
  } // end for
  return totalYears;
}

// testing employeeGroup1
console.log(sumOfYearsExperience(employeeGroup1));
// testing employeeGroup2
console.log(sumOfYearsExperience(employeeGroup2));

// loops & two dimensional arrays checkpoint

// function to accept an array of arrays
// copy values of numbers in all arrays
// return the sum of the values

let nestedArray1 = [
  [1, 2],
  [3, 4, 5],
];
let nestedArray2 = [[1, 2], [3, 4, 5], [6]];

function sumOfNestedArrays(array) {
  console.log("in <sumOfNestedArrays>");
  let result = 0;
  for (let nestedArray of array) {
    // console.log(nestedArray);
    for (let number of nestedArray) {
      // console.log(number);
      result += number;
    }
  }
  return result;
}
// testing nestedArray1
console.log("the sum is:", sumOfNestedArrays(nestedArray1));
// testing nestedArray2
console.log("the sum is:", sumOfNestedArrays(nestedArray2));

/*
// what about an array nested in an array in an array???
let rabbit = 0;
let hole = [ [1, 2], [3, 4, 5], [6, [7, 8]]];

function rabbitHole (array) {
    console.log("in <rabbitHole> and might not get out");
    let result = 0;
    
    for (let nestedArray of array) {
        // console.log("nested array:", nestedArray);

        for (let nest of nestedArray) {
            // console.log("nest of nested array:", nest);
            
            // broken
            for (let anotherNest of nest) {
                console.log(anotherNest);
            }
        }
    }
    return rabbit;
}
console.log(rabbit);
console.log("I give up", rabbitHole(hole));
*/
