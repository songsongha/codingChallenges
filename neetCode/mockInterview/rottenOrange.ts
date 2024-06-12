 // https://leetcode.com/problems/rotting-oranges/description/

 function orangesRotting(grid: number[][]): number {
        type Location = [number, number]
        const rottenOrangeList: Location[] = []

        // get location of rotting oranges
        for (let rowIndex = 0; rowIndex < grid.length; rowIndex ++){
            for( let colIndex = 0; colIndex < grid[0].length; colIndex++){
                const value = grid[rowIndex][colIndex]
                if (value === 2){
                    rottenOrangeList.push([rowIndex, colIndex])
                }
            }
        }

        while (rottenOrangeList.length > 0) {
            // remove the element from the rottenOrangeList
            const location = rottenOrangeList.shift()
            if (!location) break  
            const [row, col] = location
            // check for out of bounds
            if (row > grid.length || row < 0 || col > grid[0].length) continue

            const adjacent = [-1, 1]
            adjacent.forEach(element =>{
                const value1 = grid[row + element][col]
                const value2 = grid[row][col + element]
                if (value1 === 1){
                    grid[row + element][col] = 2
                    rottenOrangeList.push([row + element, col])
                }
                if (value2 === 1){
                    grid[row][col + element] = 2
                    rottenOrangeList.push([row, col + element])
                }
            })     
        }
        // check if the grid still contains fresh oranges
        for (let rowIndex = 0; rowIndex < grid.length; rowIndex ++){
            if (grid[rowIndex].includes(1)){
                return -1
            }
        }
        
    return -1
}