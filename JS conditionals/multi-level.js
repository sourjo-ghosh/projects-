/**
 * Multi-Level condition
 */

// const price = 4000;

// if(price >= 5000){
//     //10% discount
//     const discount = price * 20 / 100;
//     const payAmount = price - discount;
//     console.log('You will be pay with discount', payAmount);
// }
// else if(price >= 2500){
//     const discount = price * 5 / 100;
//     const payAmount = price - discount;
//     console.log('You will be pay with discount', payAmount);
// }
// else {
//     console.log('You will be pay ', price);
// }


const price2 = 3000;

if(price2 >= 2000){
    // 3% discount 
    const discount2 = price2 * 3 / 100;
    const payAmount2 = price2 - discount2;
    console.log('You will be pay with 3 percent discount ', payAmount2);
} else{
    console.log('you will be pay ', price2);
}
