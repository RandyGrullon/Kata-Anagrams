const Validate = require("../MainCode");

test('Anagrams Is Null', () => {
    expect(Validate(null)).toBe('Null Exception');
});

test('Anagrams Is Empty', () => {
    expect(Validate(" ")).toBe(' ');
});

test('Anagrams int to Empty', () => {
    expect(Validate(38734958)).toBe(' ');
});