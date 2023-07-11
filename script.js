// addition checkpoint
function sumOfTwo (num1, num2) {
console.log("in <sumOfTwo>");
return num1 + num2;
}

// testing sumOfTwo
let test1 = sumOfTwo(2, 3);
console.log("should be 5:", test1);
// testing sumOfTwo with negative number
let test2 = sumOfTwo(2, -7);
console.log("should be 9:", test2);


// conditional checkpoint
function toCompare (num1, num2) {
    console.log("in <toCompare>");
    if (num1 > num2) {
        return "The first number was bigger!"
    }
    if (num1 < num2) {
        return "The second number was bigger!"
    }
    if (num1 == num2) {
        return "The numbers are the same!"
    }
}

// testing toCompare, num1 > num2
console.log(toCompare (3, 2));
// testing toCompare, num1 < num2
console.log(toCompare (2, 7));
// testing toCompare, num1 = num2
console.log(toCompare (7, 7));

// array checkpoint

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10, 11, 12];

// function takes array as parameter
function firstLastSum (array) {
    // 
    let arraySum = array[0] + array[array.length - 1];
    // return sum of first and last array index
    return arraySum
}

// testing firstLastSum
console.log("should be 6:", firstLastSum(array1));
console.log("should be 18:", firstLastSum(array2));

