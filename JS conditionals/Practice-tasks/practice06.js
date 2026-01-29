/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


let ticketFare = 800;
let age = 20;
let isStudent = true;
console.log("Ticket Price is ~", ticketFare);
if (age < 10){
    console.log("For children Ticket is free!");
} else if (age >= 60){
    let discountPrice = ticketFare * 15 / 100;
    let totalPrice = ticketFare - discountPrice;
    console.log("for senior citizens get 15% discount ~", totalPrice);
} else if(isStudent){
    let discountPrice = ticketFare * 50 / 100;
    let totalPrice = ticketFare - discountPrice;
    console.log("For students get 50% discount ~", totalPrice);
} else{

}