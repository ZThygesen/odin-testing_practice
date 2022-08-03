import { expect } from "expect";
import { caesarCipher } from "./caesarCipher";

test('Single letter: lowercase', () => {
    expect(caesarCipher('a')).toBe('d')
})

test('Single letter: uppercase', () => {
    expect(caesarCipher('A')).toBe('D');
})

test('Sentence: lowercase', () => {
    expect(caesarCipher('this is a test i hope it works')).toBe('wklv lv d whvw l krsh lw zrunv');
})

test('Sentence: uppercase', () => {
    expect(caesarCipher('THIS IS A TEST I HOPE IT WORKS')).toBe('WKLV LV D WHVW L KRSH LW ZRUNV');
})

test('Sentence: upper and lower', () => {
    expect(caesarCipher('ThIs Is A tEsT i HoPe It WoRkS')).toBe('WkLv Lv D wHvW l KrSh Lw ZrUnV');
})

test('Wrapping', () => {
    expect(caesarCipher('xXyYzZ')).toBe('aAbBcC');
})

test('Other chars stay the same', () => {
    expect(caesarCipher('Th1s !s (a) t3st; 1 h0p3 i7 wOrk5!?/+!')).toBe('Wk1v !v (d) w3vw; 1 k0s3 l7 zRun5!?/+!');
})

test('Empty string', () => {
    expect('').toBe('');
})


