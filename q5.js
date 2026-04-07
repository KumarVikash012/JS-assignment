// Input
let N = Number(prompt("Enter N:"));
let seed = Number(prompt("Enter seed:"));

//Soln
let skip = seed + 2;
let sum = 0;
let m = 0;

while (sum < N) {
    m++;
    if (m % skip !== 0) {
        sum += m;
    }
}

// Output
alert(m + " " + sum);
