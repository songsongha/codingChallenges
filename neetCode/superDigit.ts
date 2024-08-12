const sumDigits = (s: string): number => {
    let stringSum = s
    let sum = 0
    for (let char of stringSum) {
        sum += Number(char)
    }
    return sum
}
function superDigit(n: string, k: number): number {
    if (n.length === 1) return Number(n)
    let stringSum = n
    if (k > 1) {
        stringSum = (sumDigits(n) * k).toString()
    }
    console.log({ stringSum })
    while (stringSum.length > 1) {
        stringSum = sumDigits(stringSum).toString()
    }

    return Number(stringSum)
}

console.log(superDigit('9875', 4))
