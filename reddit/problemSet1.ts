/*
https://www.reddit.com/r/reactjs/comments/1cjfqax/my_recent_experience_in_a_technical_interview/


Question 1: reduce the array [1, 1, 2, 2, 2, 3] into the object { 1: 2, 2: 3, 3: 1 }
Basically just count the numbers in an array and put in in an object. The key word here is REDUCE. 

Question 2: take the following code, give the button a red background, and have the button alert the user onClick.
<div>
    <button id=“my-id”>click me</button>
</div>

Question 3: algorithms - take the following graph and make a function to find the islands. 0=water, 1=land
[
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
]


Question 4: take this array of numbers and create a function that returns the first set of numbers in the array that add up to a given number.
ex.
nums = [2, 7, 11, 14, 17]
given = 9
func(nums, given) // [2, 7]

He only wanted the indices of the first two numbers that added up to the given number. I made a solution to find ALL the numbers that would add up to the given number.

*/

// Question 1

export const arrayToObject = (arr: number[]): Record<number, number>  => {
    return arr.reduce<Record<number, number>>((acc, curr)=> {
        acc[curr] = (acc[curr] | 0) +1
        return acc 
    }, {})
}

// Question 2 -> use codepen.io
/*
<div>
    <button onClick=alertFunction() id=“my-id”>click me</button>
</div>


<script>
function alertFunction() {
  alert("I am an alert box!");
}
</script>

 // CSS code

button {
  background: red;
}
*/

// Question 3:

export const countIslands = (seaChart: number[][]): number => {
    function dfs(row: number, col: number) {
        if (row < 0 || col < 0 || row >= seaChart.length || col >= seaChart[0].length || seaChart[row][col] === 0) {
            return;
        }
        seaChart[row][col] = 0; // Mark current cell as visited
        // Check neighboring cells
        dfs(row + 1, col); // Down
        dfs(row - 1, col); // Up
        dfs(row, col + 1); // Right
        dfs(row, col - 1); // Left
    }

    let count = 0;
    for (let rowIndex = 0; rowIndex < seaChart.length; rowIndex++){
        for(let colIndex = 0; colIndex < seaChart[0].length; colIndex++){
            if (seaChart[rowIndex][colIndex] === 1){
                count++
                dfs(rowIndex,colIndex)
            }
        }
    }
    return count
}

// Question 4
// assumptions: can reuse elements from the array
export const findFirstSumSet = ( arr: number [], targetSum: number, memo: Record<number, number[] | null> = {} ): number[] | null => {
    if (targetSum === 0) return []
    if (targetSum < 0) return null
    if (targetSum in memo) return memo[targetSum]

    for (const num of arr){
        // check element of the array
        const newTargetSum = targetSum - num
        const result = findFirstSumSet(arr, newTargetSum)
        if (result !== null){
            memo[targetSum] = [...result, num]
            return memo[targetSum]
        }

    }
    memo[targetSum] = null
    return null
}