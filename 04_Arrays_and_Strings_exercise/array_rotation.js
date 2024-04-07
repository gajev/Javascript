function ArrayRotation(numbers, rotations) {
    for (i=0; i<rotations; i++) {
        numbers.push(numbers.shift())
    }
    console.log(numbers.join(" "))
}

ArrayRotation([51, 47, 32, 61, 21], 2)
ArrayRotation([32, 21, 61, 1], 4)
ArrayRotation([2, 4, 15, 31], 5)