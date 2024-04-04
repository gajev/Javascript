function LargestNumber(num1, num2, num3) {
    const numbersArr = [num1, num2, num3]
    let number = Math.max(...numbersArr)
    console.log(`The largest number is ${number}.`)
}

LargestNumber(5, 333, 16) 