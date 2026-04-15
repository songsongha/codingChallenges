function exist(board: string[][], word: string): boolean {
    const search = (row: number, col:number, index: number): boolean =>{
        console.log({row})
        console.log({col})
            // check for out of bounds
            if ( row < 0 || row  >= board.length || col < 0 || col >= board[0].length) return false
                console.log('board[row][col]', board[row][col])
            if (board[row][col] !== word[index]) return false
            if (index === word.length - 1) return true
                board[row][col] = "0"
                return search(row,col + 1, index + 1) || search(row,col - 1, index + 1)
                || search(row - 1,col, index + 1) || search(row + 1, col, index + 1)   
        }

    for (let row = 0; row < board.length; row++ ){
        for ( let col = 0; col < board[0].length; col++){
            if (board[row][col] === word[0]){
                // begin search
                if (search(row,col,0)) return true
            } 
        }
    }
    return false
    // for each char in the word
    // looping grid to find first letter in the string
    // check adjacent cells if any of them match the second letter
    // mark the cells that we visited to make sure that we don't visit them again
    // if there is a match continue
    // until we reach the end of word.
    // return true if we reach the end of word,
    // otherwise return false
};