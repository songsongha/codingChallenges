 // https://leetcode.com/problems/rotting-oranges/description/

 function orangesRotting(grid: number[][]): number {
        type Location = [number, number]
        const rottenOrangeList: (Location| null)[] = []

        // get location of rotting oranges
        for (let rowIndex = 0; rowIndex < grid.length; rowIndex ++){
            for( let colIndex = 0; colIndex < grid[0].length; colIndex++){
                const value = grid[rowIndex][colIndex]
                if (value === 2){
                    rottenOrangeList.push([rowIndex, colIndex])
                }
            }
        }

        let minutes = -1
        rottenOrangeList.push(null)
        while (rottenOrangeList.length > 0) {
            // remove the element from the rottenOrangeList
            const location = rottenOrangeList.shift()
            if (!location){
                minutes++
                if (rottenOrangeList.length > 0) rottenOrangeList.push(null)
                continue
            } 
            const [row, col] = location
            console.log({location})

            if (row + 1 < grid.length){
                const below = grid[row + 1][col]
                if (below === 1){
                    grid[row + 1][col] = 2
                    rottenOrangeList.push([row + 1, col])
                }

            }
            if (row - 1 >= 0){
                console.log("row - 1 >= 0",row - 1 >= 0)
                const above = grid[row - 1][col]
                if (above === 1){
                    grid[row - 1][col] = 2
                    rottenOrangeList.push([row - 1, col])
                }

            }
            if (col + 1 < grid[0].length){
                const right = grid[row][col+1]
                if (right === 1){
                    grid[row][col+1] = 2
                    rottenOrangeList.push([row, col+1])
                }

            }
            if (col - 1 >= 0){
                const left = grid[row][col-1]
                if (left === 1){
                    grid[row][col-1] = 2
                    rottenOrangeList.push([row, col-1])
                }

            }
        }
        // check if the grid still contains fresh oranges
        for (let rowIndex = 0; rowIndex < grid.length; rowIndex ++){
            if (grid[rowIndex].includes(1)){
                return -1
            }
        }
        
    return minutes
}

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))
console.log(orangesRotting([[0,2]]))