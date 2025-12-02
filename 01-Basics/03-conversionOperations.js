let score = "sana";    //Now its type is NaN

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

console.log(typeof NaN);
console.log(typeof undefined);


let isLoggedIn = 1;

let inBoolean = Boolean(isLoggedIn);
console.log(inBoolean);


let number = 33;

let numberInString = String(number);
console.log(numberInString);
console.log(typeof(numberInString));



// ************************* OPERATIONS *****************************

let str1 = "Hello!";
let str2 = " Programming";

let str3 = str1 + str2;
console.log(str3);

// Postfix Operators
let x = 3;
const y = x++;
console.log(`The value of x is:${x}, The value of y is:${y}`);

//Prefix Operator
let a = 3;
const b = ++a;
console.log(`The value of a is: ${a}, The value of b is: ${b}`);






