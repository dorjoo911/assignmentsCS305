/* #1
Write a program to compute sales commission based on following rules:
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (exclusive)
• 2% for sales above $500
• If the salesman is not salaried then
• 2% for sales between $300 and $500 (exclusive)
*/
// function salesCommission(salary, sales) {
//   var commission = 0;
//   if (salary > 0 && sales >= 300 && sales < 500) {
//     commission = commission + sales * 0.01;
//   } else if (salary > 0 && sales >= 500) {
//     commission = commission + sales * 0.02;
//   } else if (salary < 1 && sales >= 300 && sales < 500) {
//     commission = commission + sales * 0.02;
//   } else if (salary < 1 && sales >= 500) {
//     commission = commission + sales * 0.03;
//   }
//   return commission;
// }
// console.log(salesCommission(0, 500));

/* #2
Write a loop that continually prompts for age until you enter age older than 18
• Write both while and do while versions.
*/
// function ageValid(age) {
//   const prompt = require("prompt-sync")();
//   // while (age) {
//   //   if (age < 19) {
//   //     console.log("prompt('Enter valid age')");
//   //     break;
//   //   } else {
//   //     console.log("Valid age");
//   //     break;
//   //   }
//   // }
//   do {
//     if (age < 19) {
//       prompt("Enter valid age");
//       break;
//     } else {
//       console.log("Valid age");
//       break;
//     }
//   } while (age);
// }
// ageValid(19);

/* #3
Make a defining table and program to print out the balance of a savings account that
compounds interest monthly. Prompt the user for the
• initial amount
• annual interest rate
• number of years to compound
*/
// function showBalance(amount, rate, years) {
//   var res = 0;
//   amount;
//   rate;
//   years;
//   console.log("prompt(amount)");
//   if (amount > 0) {
//     console.log("prompt(rate)");
//     if (rate > 0) {
//       console.log("prompt(years)");
//       res = res + amount * rate * years;
//     } else {
//       console.log("prompt('invalid number')");
//     }
//   } else {
//     console.log("prompt('invalid number')");
//   }
//   return res;
// }
// console.log(showBalance(100, 0.03, 5));

/* #4
Write code to print the number patterns on the console
// 12345
// 12345
// 12345
// 12345
// 12345
// 1
// 22
// 333
// 4444
// 55555
// 55555
// 4444
// 333
// 22
// 1
*/

// let n = 5; // height of pattern
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // Internal loop
//   for (let j = 1; j <= i; j++) {
//     string += i;
//   }
//   string += "\n";
// }
// console.log(string);
// let n = 5; // height of pattern
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);
// let n = 5; // height of pattern
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     string += n - i + 1;
//   }
//   string += "\n";
// }
// console.log(string);

/* #5
Cost of House Down Payment
Make a defining table and then write a program that calculates 
down payment for a home loan based
on following rules. Your program should prompt for the cost 
and write the down payment amount to
the console.
Cost of House Down Payment
$0    to less than 50K        5% of the cost
$50K  to less than 100K       $1000 + 10% of (cost - $50K)
$100K to less than 200K       $2000 + 15% of (cost - $100K)
$200K and above               $5000 + 10% of (cost - $200K)
*/
// function downCal(houseCost) {
//   let downPayment = 0;
//   if (houseCost < 50) {
//     downPayment += houseCost * 0.05;
//   } else if (houseCost >= 50 && houseCost < 100) {
//     downPayment += 1 + houseCost * 0.1;
//   } else if (houseCost >= 100 && houseCost < 200) {
//     downPayment += 2 + houseCost * 0.15;
//   } else {
//     downPayment += 5 + houseCost * 0.1;
//   }
//   return downPayment;
// }
// console.log(downCal(200));

/* #6
Write a JavaScript program to prompt for an integer and compute 
the sum of all the digits
Input        Output
123    -     6
102    -     3
8      -     8
*/
// const prompt = require("prompt-sync")(); //My prompt is not working!!!
// let sum = prompt(num);                   //My prompt is not working!!!
function sumOfNumbers(dstr) {
  let dsum = 0;

  for (let i = 0; i < dstr.length; i++) {
    if (/[0-9]/.test(dstr[i])) dsum += parseInt(dstr[i]);
    // test() does return boolean. existing string has digits?
  }
  return dsum;
}

console.log(sum_digits_from_string("abcd12efg9"));
console.log(sum_digits_from_string("w3resource"));
