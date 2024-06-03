import { arrayToObject } from "./problemSet1"


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