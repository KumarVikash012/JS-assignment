// Input
let N = Number(prompt("Enter N:"));
let K = Number(prompt("Enter K:"));

// aoln
function isPalindrome(num) {
    let original = num;
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return original === reversed;
}

let found = -1;

for (let X = 0; X <= 100000; X++) {
    let num = N + X;

    if (num % K === 0 && isPalindrome(num)) {
        found = X;
        break;
    }
}

// Output
alert(found);
