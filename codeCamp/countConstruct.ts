/* Write a function countConstruct(target, wordBank) that accepts a target string and an array of strings.

The function should return the number of ways that the target can be constructed by concatenating elements of the wordBank array.

You may reuse elements of wordBank as many times as needed.

*/

// m = target.length
// n = wordBank.length

// brute force
// time: O(m*n^m) => number of branches is n multiplied m number of levels and you need to account for time to slice
// space: O(m^2) => account for the farthest leaf and the space for the slice
// memoized
// time: O(n*m^2) => not all branches are needed, the max is n*m and you need to account for time to slice (m)
// space O(m^2)

type CountConstructMemo = Record<string, number>

const countConstruct = (target: string, wordBank: string[], memo: CountConstructMemo = {}): number => {
    if (target === '') return 1
    if (target in memo) return memo[target]

    let totalCount = 0
    for (let word of wordBank){
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const numWaysForRest = countConstruct(suffix, wordBank, memo)
            totalCount += numWaysForRest
        } 
    }
    memo[target] = totalCount
    return totalCount
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate','t', 'ska', 'sk', 'boar'])) // 0
console.log(countConstruct('enterapotentpot', ['a','p','ent','enter', 'ot', 'o', 't'])) // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeeee', 'eeeeeeeee', 'eeeeeeeeee']))

// Tabulation method
// represent in a table the substring upto but not including the current index
const countConstructTabulation = (target: string, wordBank: string[]): number => {
    const table = new Array(target.length + 1).fill(0)
    table[0] = 1
    for (let i = 0; i <= target.length; i++) {
        if (table[i]) {
            for (let word of wordBank) {
                if (target.slice(i,word.length) === word) table[i + word.length] += 1
            }
        }
    }
    console.log({table})
    return table[target.length]

}
console.log(countConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstructTabulation('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstructTabulation('skateboard', ['bo', 'rd', 'ate','t', 'ska', 'sk', 'boar'])) // 0
console.log(countConstructTabulation('enterapotentpot', ['a','p','ent','enter', 'ot', 'o', 't'])) // 4
console.log(countConstructTabulation('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeeee', 'eeeeeeeee', 'eeeeeeeeee']))
