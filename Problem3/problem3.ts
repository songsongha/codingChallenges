// Problem 3: Use recursion to determine the maximum value in an array


// export default function recursiveMax( numbers:number[] | null ) {

// }

export const fizz_buzz = (numbers: number[]) => {
    let result: (string | number)[] = []
    
    for ( let num of numbers) {
        if (num % 15 === 0) {
            result.push('fizzbuzz')
        } else if (num % 3 === 0) {
            result.push('fizz')
        } else if (num % 5 === 0) {
            result.push('buzz')
        } else {
            result.push(num)
        }
    }
    
    return result.join(', ')
}

