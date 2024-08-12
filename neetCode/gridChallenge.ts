/* Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. 
Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.*/

function gridChallenge(grid: string[]): string {
    // Write your code here
    // order the strings
    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i]
            .split('')
            .sort((a, b) => a.localeCompare(b))
            .join('')
    }
    console.log({ grid })
    // check each col

    for (let col = 0; col < grid[0].length; col++) {
        let prevItem = ''
        for (let row = 0; row < grid.length; row++) {
            const currentItem = grid[row][col]

            if (prevItem) {
                if (prevItem.localeCompare(currentItem) > 0) {
                    console.log('prevItem after currentItem')
                    return 'NO'
                }
            } else {
                prevItem = currentItem
            }
        }
    }
    return 'YES'
}
