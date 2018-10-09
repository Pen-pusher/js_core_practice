const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
var PHONE_NO = 0;
const ACCESSORY_PRICE = 9.99;
var ACCESSORY_NO = 0;

var bank_balance = 303.91;
var amount = 0;


// Write a program to calculate the total price of your phone purchase.
// You will keep purchasing phones (hint: loop!) until you run out of bank balance.
// You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
while (amount < bank_balance) {
  amount += PHONE_PRICE;
  PHONE_NO++;
  if (amount < SPENDING_THRESHOLD){
    amount += ACCESSORY_PRICE;
    ACCESSORY_NO++;
  } 
}
// Write a function called calculateTax which takes an argument 'amount' and calculates the tax you need to pay.
function calculateTax(amt) {
  return amt * TAX_RATE;
}

// Write a function named formatAmount which returns you amount in this format '$ 132.45' make the decimal fixed to 2 places.
function formatAmount(amt) {
  return "$ " + amt.toFixed (2);
}


//After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
amount += calculateTax(amount);
console.log("Purchase amount :" +formatAmount(amount));


//Finally, check the amount against your bank account balance to see if you can afford it or not.
if(amount<bank_balance)
    alert("you can purchase Total ammount is =" + formatAmount(amount));
else
    alert("you cant purchase the item");

console.log("no of phone=" + PHONE_NO);
console.log("no of accesories=" + ACCESSORY_NO);



// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
    // var i = 1;
    // while (i <= 100) {
    //   if ((i%3)==0 && (i%5)==0) {
    //     console.log("fizzbuzz");
    //   }
    //   else
    //     if ((i % 3) == 0 || (i % 5) == 0){
    //       if ((i % 3) == 0)
    //         console.log("fizz");
    //       if ((i % 5) == 0) 
    //         console.log("buzz");
    //     }
    //     else
    //     console.log(i);
    //   i++;
    // }

var i = 1;
while (i <= 100){
    if(i % 15 == 0)
      console.log("fizzbuzz")
      else
        if ((i % 3) == 0)
          console.log("fizz");
          else
            if ((i % 5) == 0)
              console.log("buzz");
              else
                console.log(i);
  i++;
}