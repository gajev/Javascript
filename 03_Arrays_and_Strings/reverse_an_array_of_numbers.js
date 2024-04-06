function ReverseNumbers(count, array) {
    result = []
    for (i=0; i <count; i++){
        result.unshift(array[i])
    }
    console.log(result.join(" "))
}

ReverseNumbers(4, [-1, 20, 99, 5])