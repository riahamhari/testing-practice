import calculator from "../scripts/calculator";

test('each function returns the correct calculation', () => {
    expect(calculator.add(2, 3)).toBe(5)
    expect(calculator.subtract(6, 4)).toBe(2)
    expect(calculator.divide(6, 2)).toBe(3)
    expect(calculator.multiply(4, 3)).toBe(12)
});