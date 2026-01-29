// Practice task 02

// Weight and Height 
let weight = 95;
let heightFeet = 5;
let heightInches = 9;
let totalInches = (heightFeet * 12) + heightInches;
let height = totalInches * 0.0254;
// Show the height and weight 
console.log("Your weight :", weight + "kg");
console.log("Your height :", height + " Meter");
// show BMI  
let BMI = weight / (height * height);
console.log("Your Body Mass Index (BMI);", BMI.toFixed(2));

if (BMI <= 18.5){
    console.log("You are underweight ~", BMI.toFixed(2));
} else if (BMI >= 18.5 && BMI <= 24.9){
    console.log("You are normal ~", BMI.toFixed(2));
} else if (BMI >=25 && BMI <= 29.9){
    console.log("You are overweight ~", BMI.toFixed(2));
} else {
    console.log("You are obese, Go to Gym!!!!");
}
