/* 

  Using node.js (v20), write a program that finds the smallest positive integer that when represented in base 10, moving the least significant digit
 to become the most significant digit, the new integer is exactly triple the original integer. 
 
 For example, 14 becomes 41 which is close to triple but not exact. Another close example is 103 becoming 310, again very close to triple but not exact. The program
 must complete in less than 5 seconds on a modern laptop, printing the integer to the console.

 */

const smallestTriple = () => {
    /* 
  The problem can be represented as a mathematical equation D * 10^k + x = 3(10x + D)
  where D is the last digit being moved to the front 
  x is the rest of the number
  k is the length of x

  This equation can be rearranged to solve for x, where x = D (10^k - 3) / 29
  We can increment values of k and iterate through values of D to check if x is a whole number and length is equal to k
  */
    let k = 1
    while (true) {
        for (let lastDigit = 1; lastDigit <= 9; lastDigit++) {
            const powerOf10 = BigInt(10) ** BigInt(k)
            const numerator = BigInt(lastDigit) * (powerOf10 - BigInt(3))
            if (numerator % BigInt(29) === BigInt(0)) {
                const restOfNumber = numerator / BigInt(29)
                if (restOfNumber.toString().length === k) {
                    const smallestValue = BigInt(10) * restOfNumber + BigInt(lastDigit)
                    return smallestValue
                }
            }
        }
        k++
    }
}

console.log(smallestTriple())
