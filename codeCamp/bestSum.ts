/* Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments
The function should return an array containing the shortest combination of numbers that add up to exactly targetSum.
If there is a tie for the shortest combination, return any one of the shortest */

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
