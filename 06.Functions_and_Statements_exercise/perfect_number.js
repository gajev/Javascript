function PerfectNumber(number) {
    let sumNum = 1
    for (i = 2; i <= number / 2; i++) {
        if(number % i == 0){
            sumNum += i
        }
    }
    if (sumNum === number){
        console.log(`We have a perfect number!`)
    } else {
        console.log("It's not so perfect.")
    }
}

PerfectNumber(6)
PerfectNumber(28)
PerfectNumber(1236498)