/* Write a function fib(n) that takes in a number as an argument.
The function should return the nth number of the Fibonacci sequence */

type Memo = Record<number,number>

// typical recursion, O(2^n) time complexity
const fib = (n: number): number => {
    if (n <= 2) return 1
    return fib(n-1) + fib(n-2)
}
// fine for low values of n, but n=50 will take a long time
console.log('fib 7', fib(7))

// memoized recursion O(n) time complexity
const fib2 = (n: number, memo: Memo = {}) => {
    if (n in memo) return memo[n]
    if (n <= 2) return 1
    memo[n] = fib2(n-1, memo) + fib2(n-2, memo)
    return memo[n]
}
console.log('fib2 50', fib2(50))
