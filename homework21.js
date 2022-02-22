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
12345
12345
12345
12345
12345
1
22
333
4444
55555
55555
4444
333
22
1
*/
function patterns() {
  let n = 5; // height of pattern
  let string = "";
  // External loop
  for (let i = 1; i <= n; i++) {
    // Internal loop
    for (let j = 1; j <= i; j++) {
      string += i;
    }
    string += "\n";
  }
  console.log(string);
}
