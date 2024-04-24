import { Coordinate, isSunAboveHorizon } from "./problem2"

const horizon: Coordinate[] = [
    [0,0],
    [6, 1],
    [9,3],
    [2, 5],
    [10,0]
]

describe("isSunAboveHorizon", () => {
    it('should return true if the sun is above the horizon', () => {
      expect(isSunAboveHorizon(horizon, [ 4, 5])).toBe(true)
    });
    it('should return false if the sun is below the horizon', () => {
        expect(isSunAboveHorizon(horizon, [ 4, -2])).toBe(false)
    });
    it('should return false if the sun is on horizon', () => {
        expect(isSunAboveHorizon(horizon, [ 6, 1])).toBe(false)
    });
    it('should return an error if the sun is above of the range of the horizon', () => {
        expect(()=>{
            isSunAboveHorizon(horizon, [ 11, 5])
        }).toThrow('Sun is outside of range')
    });
    it('should return an error if the sun is below of the range of the horizon', () => {
        expect(()=>{
            isSunAboveHorizon(horizon, [ -2, 5])
        }).toThrow('Sun is outside of range')
    });
    it('it should return an error if the horizon has no length', () => {
        expect(() =>{
            isSunAboveHorizon([], [ 11, 5])
        }).toThrow('Horizon has no length')
    });

});