/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/

const addTarget = (array: number[], target: number): boolean => {
    // look through array
    const memo: Record<number, boolean> = {}
    for (let i = 0; i < array.length; i++) {
        const difference = target - array[i]

        if (memo[array[i]]) return true
        memo[difference] = true

        // for (let j = i + 1; j < array.length; j++) {
        //     if (array[i] + array[j] === target) return true
        // }
    }
    return false
}

console.log(addTarget([2, 5, 11, 15], 7))
console.log(addTarget([2, 5, 11, 15], 9))
console.log(addTarget([2, 0, 5, 1, 15], 5))
