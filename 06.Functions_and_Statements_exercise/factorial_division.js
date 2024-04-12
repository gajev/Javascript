function FactorialDivision(first_num, second_num){
    let firstResult = 1;
    for (let i = 2; i <= first_num; i++) {
        firstResult *= i;
    }
    let secondResult = 1;
    for (let i = 2; i <= second_num; i++) {
        secondResult *= i;
    }
    console.log((firstResult / secondResult).toFixed(2))
}

FactorialDivision(6, 2)