/* Write a function 'canConstruct(target, wordBank)' that accepts a
target string and an array of strings.

The function should return a boolen indication whether or not 
the target can be constructed by concatenating elements of the
wordBank array. 

We can reuse the wordBank elements as many times as we see fit.
*/

// Brute force
// m = target.length
// n = wordBank.length
// time complexity: 0(m*n^m) the farthest leaf would be of distance m, and we could be checking every item in the array, 
// so each level is n, and there are m levels. We also have to consider target.slice which could take m time.
// space complexity: O(m^2) height of tree is m (farthest leaf), and each stack frame has to store the suffix array which would have length m

// Memoized
// time complexity O(n*m2) don't need to explore all the leaves, we will n number of branchs and height of m, plus time to copy the suffix
// space: O(m^2) the height of the tree is the same and we still have to store suffix
type CanConstructMemo = Record<string, boolean>

const canConstruct = (target: string, wordBank: string[], memo: CanConstructMemo = {}): boolean => {
    if (!target) return true
    if (target in memo) return memo[target]
    for (let word of wordBank){
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            if (canConstruct(suffix, wordBank, memo)) {
                memo[target] = true
                return true
            }
        }
    }
    memo[target] = false
    return false
}

console.log(canConstruct('abcdef', ['abc', 'def']))
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate','t', 'ska', 'sk', 'boar']))
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeeee', 'eeeeeeeee', 'eeeeeeeeee']))

// Tabulation method
// represent in a table the substring upto but not including the current index


const canConstructTabulation = (target: string, wordBank: string[]): boolean => {
    const table = new Array(target.length + 1).fill(false)
    table[0] = true
    for (let i = 0; i <= target.length; i++) {
        if (table[i]) {
            for (let word of wordBank) {
                if (target.slice(i,word.length) === word) table[i + word.length] = true
            }
        }
    }
    console.log({table})
    return table[target.length]
}

console.log(canConstructTabulation('abcdef', ['abc', 'def'])) // true
console.log(canConstructTabulation('skateboard', ['bo', 'rd', 'ate','t', 'ska', 'sk', 'boar'])) // false
console.log(canConstructTabulation('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeeee', 'eeeeeeeee', 'eeeeeeeeee'])) // false
