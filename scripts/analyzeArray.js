function analyzeArray(numbers) {
    // Calculate the average of the numbers
    const sum = numbers.reduce((a, b) => a + b, 0);
    const average = sum / numbers.length;

    // Find the minimum and maximum values in the array
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    // Return an object with the calculated properties
    return {
        average,
        min,
        max,
        length: numbers.length
    };
}
module.exports = analyzeArray;