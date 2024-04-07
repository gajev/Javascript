function PrintEveryNthElementFromAnArray(numbers, step) {
    let result = []
    for (let i = 0; i < numbers.length; i += step) {
        result.push(numbers[i])
    }
    return result
}

PrintEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6)