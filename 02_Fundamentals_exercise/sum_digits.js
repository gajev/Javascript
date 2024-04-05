function SumDigits (a){
    sum = 0
    let numberString = a.toString();
    for (let i = 0; i < numberString.length; i++) {
        let digit = parseInt(numberString[i]);
        sum += digit
    }
    console.log(sum)
}

SumDigits(245678)