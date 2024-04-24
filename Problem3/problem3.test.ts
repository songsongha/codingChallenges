import { recursiveMax } from "./problem3"

describe("recursiveMax", () => {
    it('should return null if input is null', () => {
      expect(recursiveMax(null)).toBe(null)
    });

    it('should return null if array is empty', () => {
      expect(recursiveMax([])).toBe(null)
    });

    it('should return the correct value if the input contains negative numbers', () => {
      expect(recursiveMax([-3, -2, -1])).toBe(-1)
    });

    it('should return the correct value if the input contains positive numbers', () => {
      expect(recursiveMax([3, 2, 1])).toBe(3)
    });

    it('should return the correct value if the input has length of one', () => {
      expect(recursiveMax([3])).toBe(3)
    });

});