function EvenAndOddSubtraction(numbers){
    let oddNumbers = 0;
    let evenNumbers = 0;
    for (i=0; i <numbers.length; i++){
        if (numbers[i] % 2 === 0){
            evenNumbers += numbers[i]
        } else{
            oddNumbers += numbers[i]
        }
    }
    console.log(evenNumbers - oddNumbers)
}

EvenAndOddSubtraction([2,4,6,8,10])
EvenAndOddSubtraction([1,2,3,4,5,6])