function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));

function evenOdd(num) {
    return num % 2 === 0;
}

console.log(evenOdd(7));
console.log(evenOdd(4));