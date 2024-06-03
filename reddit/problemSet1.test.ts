import { arrayToObject, countIslands, findFirstSumSet } from "./problemSet1"


describe("arrayToObject", () => {
    it('should return the correct object for a given array', () => {
      const numArr = [1, 1, 2, 2, 2, 3]
      const numObj = { 1: 2, 2: 3, 3: 1 }
      expect(arrayToObject(numArr)).toMatchObject(numObj)
 
    })
    it('should return an empty object if array is empty', () => {
        const numArr: number[] = []
        expect(arrayToObject(numArr)).toMatchObject({})
      })
})

describe("findIslands", ()=>{
    it('should return the correct number of islands for a given 2D array', ()=>{
        const seaChart = [
            [1, 1, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 1]
        ]
        expect(countIslands(seaChart)).toBe(3)

    })
    it('should return the correct number of islands for a given 2D array with irregular shaped islands', ()=>{
        const seaChart = [
            [1, 1, 1, 1, 0],
            [1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1],
            [0, 0, 0, 1, 0]
        ]
        expect(countIslands(seaChart)).toBe(3)
    })
    it('should return the correct number of islands if the array is all 1s', ()=>{
        const seaChart = new Array(5).fill(new Array(6).fill(1))
        expect(countIslands(seaChart)).toBe(1)

    })
    it('should return the correct number of islands if the array is all 0s', ()=>{
        const seaChart = new Array(5).fill(new Array(6).fill(0))
        expect(countIslands(seaChart)).toBe(0)

    })
})

describe("findFirstSumSet", ()=>{
    it('should the correct values for a given arr', ()=>{
        const arr = [2, 7, 11, 14, 17]
        const targetSum = 9

        const result = findFirstSumSet(arr, targetSum)
        expect(result).toEqual(expect.arrayContaining([2,7]))
        expect(result?.length).toBe(2)

    })
    it('should return repeated values if that is an option for the sum', ()=>{
        const arr = [2, 7, 11, 14, 17]
        const targetSum = 8

        const result = findFirstSumSet(arr, targetSum)
        expect(result).toEqual(expect.arrayContaining([2,2,2,2]))
        expect(result?.length).toBe(4)

    })
    it('should return null if there are no options for adding up to the sum', ()=>{
        const arr = [2, 10, 11, 14, 17]
        const targetSum = 9

        const result = findFirstSumSet(arr, targetSum)
        expect(result).toEqual(null)
    })
})