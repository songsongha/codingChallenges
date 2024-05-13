/* Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments
The function should return an array containing the shortest combination of numbers that add up to exactly targetSum.
If there is a tie for the shortest combination, return any one of the shortest */

/// m = target sum
// n = numArray.length
// Brute Force
// time: O(n^m * m) => farthest leaf will be at worst m levels away (if m-1 was all the way down) and the number of branches is the number of elements in the array
// the extra m is beause of the copying of the array
// space: 0(m^2) => becuase only one branch at a time is put on the stack frame so max stack depth is m but each recursive call 
// also has the shortestCombination array which could have a max length of m (all ones perhaps) so space is m*m

// Memomized
// time: O(n*m^2)number of branches is reduced we don't need to call every branch, complexity turns to number of levels in the tree times the number of branches, the extra m is for the copying the array
// space: O(m^2) one branch at a time is put on the stack frame but we also have to account for the space of the memo array 

type BestSumMemo = Record<number, number[]| null>

const bestSum = (targetSum: number, numArray: number[], memo: BestSumMemo = {} ): number[] | null => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum < 0) return null
    if (targetSum === 0) return [] 
    let shortestCombination: number[] = []
    for( let num of numArray){
        const newTargetSum = targetSum - num
        const result = bestSum(newTargetSum, numArray, memo)
        if(result !== null)  {
            const combination = [...result, num]
            if (!shortestCombination.length || shortestCombination.length > combination.length) {
                shortestCombination = combination
            }
        }
    }
    memo[targetSum] = shortestCombination.length ? shortestCombination : null
    return memo[targetSum]
}

console.log(bestSum(7,[5,3,4,7])) // [7]
console.log(bestSum(8,[2,3,5])) // [3,5]
console.log(bestSum(8, [1,4,5])) // [4,4]
console.log(bestSum(100, [1,2,5,25])) // [25,25,25,25]

// Tabulation method
// time complexity O(n*m^2)
// space complexity O(m^2)
const bestSumTabulation = (targetSum: number, numArray: number[]): number[] | null => {
    const table = new Array(targetSum + 1).fill(null)
    table[0] = []
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numArray) {
                if (!table[i+num] || table[i+num].length > table[i].length + 1)
                table[i + num] = [...table[i], num]
            }
        }
    }
    
    return table[targetSum]
}

console.log(bestSumTabulation(8, [2,3,5])) // [3,5]
console.log(bestSumTabulation(7, [5,3,4,7])) // [7]
console.log(bestSumTabulation(8, [1,4,5])) // [4,4]
console.log(bestSumTabulation(100, [1,2,5,25])) // [25,25,25,25]