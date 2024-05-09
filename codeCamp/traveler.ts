/* Traveler on a 2D Grid.  You begin in the top left corner 
and your goal is to travel to the bottom right corner. You may only move down
or right. In how many ways can you travel to the goal on a grid with dimensions m * n 

Write a function 'gridTraveler(m, n)' to calculate this
*/

type TravelMemo = Record<string, number>
// recursive, but hangs on larger numbers like 18 O(2^n+m)
const gridTraveler = (m: number , n: number): number => {
    if ( m === 0 || n === 0) return 0
    if ( m === 1 && n === 1) return 1
    return gridTraveler(m-1,n) + gridTraveler(m,n-1)
}

console.log(gridTraveler(3,3)) // 6

// memoized m * n combinations O(m*n) time 
const gridTraveler2 = (m: number, n: number, memo:TravelMemo = {}): number =>{
    if ( m === 0 || n === 0) return 0
    if ( m === 1 && n === 1) return 1
    const key = m + ',' + n
    const key2 = n + ',' + m
    if (key in memo) {
         return memo[key]
    } else if (key2 in memo) {
        return memo[key2]
    }
    memo[key] = gridTraveler2(m-1,n, memo) + gridTraveler2(m,n-1, memo)
    return memo[key]
}

console.log(gridTraveler2(18,18)) // 2333606220

// tabulation method,

// take your current position and add it to your neighbors
// complexity is driven by size of table
// time: O(mn)
// space: O(nm)
/* */
const gridTravelerTabulation = (m: number, n: number) => {
    const table = Array(m + 1).fill([]).map(() => Array(n + 1).fill(0))
    table[1][1] = 1

    for (let i = 0; i <= m; i++){
        for(let j = 0; j <= n; j++){
            const current = table[i][j]
            if (j + 1 <= n) table[i][j+1] += current
            if (i + 1 <= m) table[i+1][j] += current
        }
    }
    return table[m][n]
}

console.log(gridTravelerTabulation(3,3) )// 6
console.log(gridTravelerTabulation(18,18)) // 2333606220