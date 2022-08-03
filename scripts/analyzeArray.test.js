import { expect } from "expect";
import { analyzeArray } from "./analyzeArray";

test('Basic numbers', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5,
    });
})

test('Same numbers', () => {
    expect(analyzeArray([1, 1, 1, 1, 1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 5,
    });
})

test('Empty array', () => {
    expect(analyzeArray([])).toEqual({
        average: NaN,
        min: undefined,
        max: undefined,
        length: 0,
    });
})
