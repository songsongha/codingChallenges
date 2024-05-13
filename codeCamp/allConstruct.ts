/* Write a function allConstruct(target, wordBank) that accepts a target string and an array of strings.

The function should return a 2D array containing all of the ways that the target can be constructed
by concatenating elements of the wordBank array 

You may reuse elements of wordBank as many times as needed
*/
/* Complexity
m = target.lenth
n = wordBank.length
    Brute Force
    Time: O(n^m) subarrays
    Space: O(m) height of the recursion tree
    The memoized version is slightly fast but is the same complexity becuase in the worst case you have to traverse the entire tree still

*/

type AllConstructMemo = Record<string, string[][]>

const allConstruct = (target: string, wordBank: string[], memo: AllConstructMemo = {}): string[][] => {
    if (target === '') return [[]]
    if (target in memo) return memo[target]
const result: string[][] = []
    for (let word of wordBank){
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank, memo)
            const targetWays = suffixWays.map(way=>[word, ...way]) // if this is an empty array it will return an empty array
            result.push(...targetWays)
        } 
    }
    memo[target] = result
    return result
}

// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
// console.log(allConstruct('skateboard', ['bo', 'rd', 'ate','t', 'ska', 'sk', 'boar'])) // 0
// console.log(allConstruct('enterapotentpot', ['a','p','ent','enter', 'ot', 'o', 't'])) // 4
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeeee', 'eeeeeeeee', 'eeeeeeeeee']))

// Tabulation method

const allConstructTabulation = (target: string, wordBank: string[]) => {
    const table: string[][][] = new Array(target.length + 1).fill([]).map(()=>[])
    // console.log({table})
    // console.log('table[0]', table[0])
    table[0] = [[]]
    for (let i = 0; i <= target.length; i++) {
            for (let word of wordBank) {
                if (target.slice(i,i + word.length) === word) {
                    const newCombination = table[i].map(subArray => [...subArray, word])
                    table[i + word.length].push(...newCombination)
                }
            }
    }
    return table[target.length]
}

console.log(allConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) 
console.log(allConstructTabulation('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) 
console.log(allConstructTabulation('skateboard', ['bo', 'rd', 'ate','t', 'ska', 'sk', 'boar'])) 
console.log(allConstructTabulation('enterapotentpot', ['a','p','ent','enter', 'ot', 'o', 't']))
console.log(allConstructTabulation('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeeee', 'eeeeeeeee', 'eeeeeeeeee'])) // will exceed stack size