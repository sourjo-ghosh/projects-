// Practice task 01
/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/


let burgerPrice = 450;
let cokePrice = 30;

if (burgerPrice >= 500) {
    console.log("Burger more than 500tk, free Coke");
} else {
    let totalPrice = burgerPrice + cokePrice;
    console.log('your total bill is -',totalPrice );
}