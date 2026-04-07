//  input
let L = Number(prompt("Enter L:"));
let R = Number(prompt("Enter R:"));
let K = Number(prompt("Enter K:"));

let count = 0;

// solution
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function digitSum(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

for (let x = L; x <= R; x++) {
    if (x % K === 0 && !x.toString().includes('0')) {
        let sum = digitSum(x);
        if (isPrime(sum)) {
            count++;
        }
    }
}

// Output
alert("Count = " + count);
