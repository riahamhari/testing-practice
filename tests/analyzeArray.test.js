import analyzeArray from "../scripts/analyzeArray";

test('returns object with average, min, max, length properties', () => {
    expect(analyzeArray([1, 2, 3, 4])).toEqual({
        average: 2.5,
        min: 1,
        max: 4,
        length: 4
    })
})