import { expect } from 'expect';
import { capitalize } from './capitalize';

test('Basic word', () => {
    expect(capitalize('test')).toBe('Test');
})

test('Sentence', () => {
    expect(capitalize('this is a test.')).toBe('This is a test.');
})

test('Starts with a number', () => {
    expect(capitalize('1 hope this works!')).toBe('1 hope this works!');
})

test('All caps', () => {
    expect(capitalize('I PROMISE I\'M NOT YELLING')).toBe('I PROMISE I\'M NOT YELLING');
})

test('Starts with non-alphanumeric character', () => {
    expect(capitalize('; is a semicolon')).toBe('; is a semicolon');
})

test('Starts with a space', () => {
    expect(capitalize(' space space space ')).toBe(' space space space ');
})

test('Empty string', () => {
    expect(capitalize('')).toBe('');
})
