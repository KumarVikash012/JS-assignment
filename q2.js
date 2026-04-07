// Input
let num = Number(prompt("Enter N:"));
let seed = Number(prompt("Enter seed:"));

// soln
for (let i = 0; i < 3; i++) {
    if (num % 2 === 0) {
        num = num / 2 + seed;
    } else {
        num = num * 3 - seed;
    }
}

let isThreeDigit = num >= 100 && num <= 999;
let middleDigit = Math.floor(num / 10) % 10;

if (isThreeDigit && middleDigit === seed) {
    alert("YES, Final Number: " + num);
} else {
    alert("NO, Final Number: " + num);
}
