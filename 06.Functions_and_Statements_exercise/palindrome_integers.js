function PalindromeIntegers(numbers){
    numbers.forEach(element => {
        let currentNumber = element.toString();
        let reversedNumber = currentNumber.split('').reverse().join('');
        console.log(reversedNumber === currentNumber)
    });
}
PalindromeIntegers([123,323,421,121])

