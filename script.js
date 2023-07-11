// addition checkpoint
function sumOfTwo (num1, num2) {
console.log("in <sumOfTwo>");
return num1 + num2;
}

// testing sumOfTwo
let test1 = sumOfTwo(2, 3);
console.log("should be 5:", test1);

let test2 = sumOfTwo(2, 7);
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