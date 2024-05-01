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