const checkPrimeArray = function(arr) {
    const isPrime = (n) => {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    };

    arr.forEach(num => {
        if (isPrime(num)) {
            console.log(num);
        }
    });
};

(() => {
    const numbers = [2, 3, 4, 5, 10, 13, 17, 18, 23];
    checkPrimeArray(numbers);
})()