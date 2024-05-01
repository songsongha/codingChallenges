/* Write a function howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments
The function should return an array  containing any combination of elements that add up to exactly the targetSum. 
If there is no combination that adds up to the targetSum, then return null.
If there are multiple combinations possible, you may return any single one.
*/

type HowSumMemo = Record<number, number[]| null>

/// m = target sum
// n = numArray.length
// Brute Force
// time: O(n^m * m) => farthest leaf will be at worst m levels away (if m-1 was all the way down) and the number of branches is the number of elements in the array
// the extra m is beause of the copying of the array
// space: 0(m) => becuase only one branch at a time is put on the stack frame so max stack depth is m

// Memomized
// time: O(n*m^2)number of branches is reduced we don't need to call every branch, complexity turns to number of levels in the tree times the number of branches, the extra m is for the copying the array
// space: O(m*^2) one branch at a time is put on the stack frame but we also have to account for the space of the memo array

const howSum = (targetSum: number, numArray: number[], memo: HowSumMemo = {} ): number[] | null => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum < 0) return null
    if (targetSum === 0) return [] 
    for( let num of numArray){
        const newTargetSum = targetSum - num
        const result = howSum(newTargetSum, numArray, memo)
        if(result !== null)  {
            memo[targetSum] = [...result, num]
            return memo[targetSum]
        }
    }

    memo[targetSum] = null
    return null
}

console.log(howSum(7,[2,3]))
console.log(howSum(8,[2,3,5]))
console.log(howSum(300, [7,14]))
