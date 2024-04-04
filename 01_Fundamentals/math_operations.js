function MathOperations(num1, num2, operator) {
    switch (operator) {
        case "+":
            console.log(num1 + num2)
            break;
        case "-":
            console.log(num1 - num2)
            break;
        case "*":
            console.log(num1 * num2)
            break;
        case "/":
            console.log(num1 / num2)
            break;
        case "**":
            console.log(num1 ** num2)
            break;
        case "%":
            console.log(num1 % num2)
            break;
    }
}

MathOperations(2, 2, "+")
MathOperations(4, 3, "-")
MathOperations(5, 4, "*")
MathOperations(6, 5, "/")
MathOperations(5, 4, "**")
MathOperations(6, 5, "%")
