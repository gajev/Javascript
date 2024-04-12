function OddAndEvenSum(number) {
    let evenSum = 0
    let oddSum = 0
    let numberAsString = number.toString()
    for (let digit of numberAsString) {
        let currentNumber = Number(digit);
        if (currentNumber % 2 == 0) {
            evenSum += currentNumber
        } else {
            oddSum += currentNumber
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
OddAndEvenSum(3495892137259234)