import { expect } from "expect";
import { calculator } from "./calculator";

test('Basic addition', () => {
    expect(calculator.add(2, 3)).toBe(5);
})

test('Negative addition', () => {
    expect(calculator.add(-3, 1)).toBe(-2);
})

test('Float addition', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
})

test('Basic subtraction', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
})

test('Negative subtraction', () => {
    expect(calculator.subtract(-3, -5)).toBe(2);
})

test('Float subtraction', () => {
    expect(calculator.subtract(0.3, 0.1)).toBeCloseTo(0.2);
})

test('Basic multiplication', () => {
    expect(calculator.multiply(3, 7)).toBe(21);
})

test('Negative multiplication', () => {
    expect(calculator.multiply(-3, 7)).toBe(-21);
})

test('Float multiplication', () => {
    expect(calculator.multiply(0.3, 0.75)).toBeCloseTo(0.225)
})

test('Basic division', () => {
    expect(calculator.divide(8, 4)).toBe(2);
})

test('Negative division', () => {
    expect(calculator.divide(-3, 1)).toBe(-3);
})

test('Division results in float', () => {
    expect(calculator.divide(10, 4)).toBe(2.5);
})

test('Float division', () => {
    expect(calculator.divide(.8, .2)).toBeCloseTo(4);
})

test('Divide by zero', () => {
    expect(calculator.divide(1, 0)).toBe(Infinity);
})
