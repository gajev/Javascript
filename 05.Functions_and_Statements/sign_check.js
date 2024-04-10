function SignCheck(a, b, c){
    let count = 0;
    [a, b, c].forEach(element => {
        if (element < 0) {
            count++;
        }
    });
    if (count % 2 == 0) {
        console.log("Positive")
    } else {
        console.log("Negative")
    }
}

SignCheck(5, 12, -15)
