// variables 

const name = "joy ghosh sourjo";
let age = 18;
let isStudent = true;
// array
const subjects = ["Math", "Science", "History"];
const address = {
  street: "Tejgoan industrial area",
  city: "Dhaka",
  zip: "1208"
};
// Print 
console.log("name ~", name);
console.log("Age ~", age);
console.log("isStudent ~", isStudent);
console.log("subjects ~", subjects);
console.log("Address ~", address);

// conditionals

if (isStudent){
    console.log("pora lekha kore je, lathi usta khay se!");
    console.log(subjects);
}

const num = [654, 54, 465, 165];

for (const num1 of num){
  console.log(num1);
}