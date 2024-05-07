/* Write a function countConstruct(target, wordBank) that accepts a target string and an array of strings.

The function should return the number of ways that the target can be constructed by concatenating elements of the wordBank array.

You may reuse elements of wordBank as many times as needed.

*/

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