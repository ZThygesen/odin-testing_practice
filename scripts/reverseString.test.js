import { expect } from "expect";
import { reverseString } from "./reverseString";

test('Basic word', () => {
    expect(reverseString('test')).toBe('tset');
})

test('Basic sentence', () => {
    expect(reverseString('This is a sentence.')).toBe('.ecnetnes a si sihT');
})

test('Has numbers and special characters', () => {
    expect(reverseString('Sem1c0lon;\'s 4r3 cO01!?.!')).toBe('!.?!10Oc 3r4 s\';nol0c1meS');
})

test('Empty string', () => {
    expect(reverseString('')).toBe('');
})
