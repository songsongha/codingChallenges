// Problem 2: given an array of points (x,y) that represent the horizon, 
// and a point (x.y) that defines the location of the sun determine whether the sun is above or below the horizon

/* assumptions: 
 - horizon array might not be sorted
 - invalid inputs will throw an error
*/
export type Coordinate = [number, number]

export const isSunAboveHorizon = ( horizon: Coordinate[], sunLocation: Coordinate ): boolean => {
    if (!horizon.length) throw new Error ('Horizon has no length')   

    horizon.sort((pointA,pointB)=> pointA[0] - pointB[0] )
    console.log({horizon})
    if (sunLocation[0] < horizon[0][0] || sunLocation[0] > horizon[horizon.length-1][0]) throw new Error ('Sun is outside of range')
    
    // find the x locations in the horizon the sun location falls between
    for (let i = 0; i < horizon.length - 1; i++) {
        if (horizon[i][0] === sunLocation[0]){
            return sunLocation[1] > horizon[i][1]
        }
        if (horizon[i][0] < sunLocation[0] && horizon[i+1][0] > sunLocation[0]){
            const slope = (horizon[i+1][1] - horizon[i][1])/(horizon[i+1][0] - horizon[i][0])
            const horizonAtSunLocation = slope * sunLocation[0] + horizon[i][0]
            return sunLocation[1] > horizonAtSunLocation
        } 
    }
    
    throw new Error ('Sun is outside of range')
}
