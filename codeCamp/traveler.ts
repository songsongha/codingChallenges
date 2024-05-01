/* Traveler on a 2D Grid.  You begin in the top left corner 
and your goal is to travel to the bottom right corner. You may only move down
or right. In how many ways can you travel to the goal on a grid with dimensions m * n 

Write a function 'gridTraveler(m, n)' to calculate this
*/

type TravelMemo = Record<string, number>
// recursive, but hangs on larger numbers like 18
const gridTraveler = (m: number , n: number): number => {
    if ( m === 0 || n === 0) return 0
    if ( m === 1 && n === 1) return 1
    return gridTraveler(m-1,n) + gridTraveler(m,n-1)
}

console.log(gridTraveler(3,3)) // 6

// memoized

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