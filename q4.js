// Input
let base = Number(prompt("Enter base:"));
let distance = Number(prompt("Enter distance:"));
let minutesLate = Number(prompt("Enter minutesLate:"));
let seed = Number(prompt("Enter seed:"));

// Soln
let fare = base + 7 * distance;

if (minutesLate > 15) {
    fare = fare + 20;
}

if (distance > 10) {
    let extra = (fare / 10);  
    extra = extra - (extra % 1); 
    fare = fare + extra;
}


if (seed % 2 !== 0) {
    fare = fare - seed;
} else {
    fare = fare + seed;
}

if (fare % 5 !== 0) {
    fare = fare + (5 - (fare % 5));
}

// Output
alert("Final Fare: " + fare);
