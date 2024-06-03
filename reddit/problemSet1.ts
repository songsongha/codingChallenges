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


Question 4: take this array of numbers and create a function that returns the indices of numbers that add up to a given number.
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