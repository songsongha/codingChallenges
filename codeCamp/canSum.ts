/* Write a function canSum(targetSum, numbers) that takes in a targetSum and array of numbers as arguments.
The function should return a boleean indication whether or not it is possible to generate the targetSum
using numbers from the array 

Assumptions; An element of the array can be used as many times as needed
All input numbers are nonnegative
*/
type CanSumMemo = Record<number, boolean>

const canSum = (targetSum: number, numArray: number[], memo: CanSumMemo = {} ): boolean => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum < 0) return false
    if (targetSum === 0) return true 
    for( let num of numArray){
        const newTargetSum = targetSum - num
        if(canSum(newTargetSum, numArray, memo) === true) {
            memo[targetSum] = true
            return true
        }
    }

    memo[targetSum] = false
    return false
}

console.log(canSum(115,[5,14]))

/* 
Time complexity O(mn)
Space complexity O(m)
*/
const canSumTabulation = (targetSum: number, numArray: number[]) => {
    const table = Array(targetSum + 1).fill(false)
    table[0] = true
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true){
            for (let num of numArray){
                table[i + num] = true
            }
        }
    }
    return table[targetSum]
}

console.log(canSumTabulation(7,[5,3,4])) // true
console.log(canSumTabulation(8, [2,3,5])) // true
console.log(canSumTabulation(300,[7,14])) // false
