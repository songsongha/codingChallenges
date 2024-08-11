function diagonalDifference(arr: number[][]): number {
    let rightDiagSum = 0
    let leftDiagSum = 0
    for (let diagIndex = 0; diagIndex < arr.length; diagIndex++) {
        rightDiagSum += arr[diagIndex][diagIndex]
        leftDiagSum += arr[diagIndex][arr.length - diagIndex - 1]
        console.log(rightDiagSum)
        console.log({ leftDiagSum })
    }
    return Math.abs(rightDiagSum - leftDiagSum)
}

console.log(
    diagonalDifference([
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9]
    ])
)
