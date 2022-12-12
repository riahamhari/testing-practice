import capitalize from '../scripts/capitalize';

test('capitalizes first letter of string', () => {
    expect(capitalize('john')).toBe('John')
});