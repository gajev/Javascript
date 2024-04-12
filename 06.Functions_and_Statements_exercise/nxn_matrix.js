function NxNMatrix(number) {
    for (i = 0; i < number; i++) {
        let tempArray = []
        for (j = 0; j < number; j++) {
            tempArray.push(number)
        }
        console.log(tempArray.join(" "))
    }
}
NxNMatrix(3)