function SameNumbers (a){
    let sum = 0;
    let TempNumber = "";
    let NumbersAreSame = true
    let numberString = a.toString();
    for (let i = 0; i < numberString.length; i++) {
        if (TempNumber == "") {
            TempNumber = numberString[0]
        } else {
            if (numberString[i] != TempNumber) {
                NumbersAreSame = false
            }
        }
        let digit = parseInt(numberString[i]);
        sum += digit
    }
    console.log(NumbersAreSame)
    console.log(sum)
}

SameNumbers(1234)