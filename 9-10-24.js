//2.triangle
let side1 = parseFloat(prompt("Enter the length of the first side:"));
let side2 = parseFloat(prompt("Enter the length of the second side:"));
let side3 = parseFloat(prompt("Enter the length of the third side:"));
function isValidTriangle(side1, side2, side3) {
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        console.log("A valid triangle can be formed.");
    } else {
        console.log("A valid triangle cannot be formed.");
    }
}
isValidTriangle(side1, side2, side3);
//2.prime or not
let number = parseInt(prompt("Enter a number to check if it's prime:"), 10);


function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
if (isNaN(number)) {
  console.log("Please enter a valid number.");
} else {
  if (isPrime(number)) {
    console.log(number + " is a prime number.");
  } else {
    console.log(number + " is not a prime number.");
  }
}
//3.largest number 
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));


if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  console.log("Please enter valid numbers.");
} else {
  let largest = Math.max(num1, num2, num3);
  console.log("The largest number is: " + largest);
}


//4.leap year
let year = parseInt(prompt("Enter a year to check if it's a leap year:"));


if (isNaN(year)) {
  console.log("Please enter a valid year.");
} else {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
}
//5.fizzbuzz

let Number = (prompt("Enter a number:"));
if (isNaN(Number)) {
  console.log("Please enter a valid number.");
} else {
 
  if (Number % 3 === 0 && Number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (Number % 3 === 0) {
    console.log("Fizz");
  } else if (Number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(Number);
  }


}
//LCM OF 2 NUMBERS
let num11 = (prompt("Enter the first number:"));
let num22 = (prompt("Enter the second number:"));


if (isNaN(num11) || isNaN(num22)) {
  console.log("Please enter valid numbers.");
} else {
  let lcm;
  let max = (num11 > num22) ? num11 : num22;


  for (let i = max; ; i++) {
    if (i % num11 === 0 && i % num22 === 0) {
      lcm = i;
      break;
    }
  }
  console.log("The LCM of " + num11 + " and " + num22 + " is: " + lcm);
}

//7. GCD Calculator

let num111 = +prompt("Enter the first number:");
let num222 = +prompt("Enter the second number:");

while (num222 !== 0) {
    let temp = num2;
    num222 = num111 % num222;
    num111 = temp;
}

console.log("GCD is " + num111);

//8. Simple Calculator

let n1 = +prompt("Enter the first number:");
let n2 = +prompt("Enter the second number:");
let operation = prompt("Enter an operation (+, -, *, /):");

let result;

switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        console.log("Invalid operation.");
        break;
}

if (result !== undefined) {
    console.log("The result is: " + result);
}