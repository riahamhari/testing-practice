import reverseString from "../scripts/reverseString"

test('reverses string', () => {
    expect(reverseString('hello')).toBe('olleh')
});