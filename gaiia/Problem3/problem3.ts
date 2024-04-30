// Problem 3: Use recursion to determine the maximum value in an array


export const recursiveMax = ( numbers:number[] | null ): number | null => {
    if (!numbers || !numbers.length) return null
    if (numbers.length === 1 ) return numbers[0]
    if (numbers[0] < numbers[numbers.length - 1]){
        return recursiveMax(numbers.slice(1))
    } else {
        numbers.pop()
        return recursiveMax(numbers)
    }

}

