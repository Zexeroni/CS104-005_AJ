let name1 = "Adrian";
let age = 20;

console.log("Name", name1);
console.log("Age", age);


let name2 = "Billy";
console.log("String", name2);

let age2 = 70;
console.log("Number", age2);

let Old = true;
console.log("boolean", Old);

let FavFruit;
console.log("Undefined", FavFruit);


let RollNumber = 15;

if (RollNumber > 10){
  console.log("The RollNumber is greater than 10");
}


let isMember = true;

if (isMember){
    console.log("Member discount applied")
}


let startValue = 50;

if(startValue > 0){
    console.log("It is positive.");
}
else if (startValue < 0){
    console.log("It is negative.");
}
else{
    console.log("It is zero.");
}


let a = 25;
let b = 50;

console.log("a equal to (typecon) b:", a == b);
console.log("a equal to (notypecon) b:", a === b);
console.log("a not equal to (typecon) b:", a != b);
console.log("a equal to (notypecon) b:", a !== b);
console.log("a greater than b:", a > b);
console.log("a less than b:", a < b);
console.log("a greater than or equal to b:", a >= b);      
console.log("a less than or equal to b:", a <= b); 


let FirstName = "Adrian";
let LastName = "Seguie";

console.log("Hello,", FirstName, LastName, "you are", age, "years old.");


let num = 50;

if (num > 0 && num < 100){
    console.log("The Number is within range");
}
else{
    console.log("The number is not within range");
}


let hasCar = true;
let hasLicence = true;
let hasInsurance = true;

if (hasCar == true && hasLicence == true && hasInsurance == true){
    console.log("You can drive legally");
}

else{
    console.log("Check your driving eligibility");
}


let Num = 21;
if (Num % 2 === 0){
    console.log("The number is even.");
}

else{
    console.log("The number is odd.");
}


let score = 85;

if (score >= 90){
    console.log("Grade A.");
}

else if (score >= 80 && score <= 89) {
    console.log("Grade B.");
}

else{
    console.log("Grade C.");
}
