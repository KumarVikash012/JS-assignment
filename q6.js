// Input
let a = Number(prompt("Enter correct answers (a):"));
let b = Number(prompt("Enter partial answers (b):"));
let c = Number(prompt("Enter wrong answers (c):"));

// Soln
let score = 3 * a + b - 2 * c;


if (score < 0) {
    score = 0;}

let total = a + b + c;
if (total > 50) {
    score = score - 10;}


let status;
if (score >= 60) {
    status = "PASS";
} else {
    status = "FAIL";
}

// Output
alert(score + ", " + status);
