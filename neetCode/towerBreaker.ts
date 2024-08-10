function towerBreakers(numTowers: number, towerHeight: number): number {
    //TODO: how to ensure each player picks the optimized move??
    const hasAValidMove = (towerArray: number[]): boolean => {
        if (towerArray.every((item) => item === 1)) return false
        for (let i = 0; i < numTowers; i++) {
            for (let moveHeight = 1; moveHeight < towerHeight; moveHeight++) {
                if ((towerArray[i] % moveHeight === 0 && moveHeight !== 1) || towerArray[i] - moveHeight === 1) {
                    return true
                }
            }
        }
        return false
    }
    const towerArray = new Array(numTowers).fill(towerHeight)
    console.log({ towerArray })
    let counter = 0
    while (hasAValidMove(towerArray)) {
        console.log('hasValidMove')
        for (let i = 0; i < numTowers; i++) {
            console.log({ i })
            for (let moveHeight = 1; moveHeight < towerHeight; moveHeight++) {
                console.log({ moveHeight })
                if ((towerArray[i] % moveHeight === 0 && moveHeight !== 1) || towerArray[i] - moveHeight === 1) {
                    console.log('towerArray[i] % moveHeight === 0', towerArray[i] % moveHeight === 0)
                    console.log('towerArray[i] - moveHeight === 1', towerArray[i] - moveHeight === 1)
                    counter++
                    towerArray[i] -= moveHeight
                    console.log({ towerArray })
                }
            }
        }
    }
    console.log({ counter })
    if (!counter) return 0
    if (counter % 2 === 0) return 2
    return 1
}

// console.log(towerBreakers(2, 6))
console.log(towerBreakers(1, 4))
