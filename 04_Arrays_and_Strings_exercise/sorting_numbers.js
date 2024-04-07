function SortingNumbers(numbers) {
    let cycles = numbers.length / 2
    let result = []
    let sortedNumbers = numbers.sort((a, b) => a - b);
    for (i = 0; i < cycles; i++) {
        result.push(sortedNumbers.shift())
        result.push(sortedNumbers.pop())
    }
    return result
}

SortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])