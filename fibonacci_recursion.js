function fibonacci_rec(num) {
        if (num <= 1) return 1;

        return fibonacci_rec(num - 1) + fibonacci_rec(num - 2);
}

console.log(fibonacci_rec(5))