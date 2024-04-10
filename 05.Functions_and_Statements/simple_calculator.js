function SimpleCalculator(a, b, operator) {
    switch (operator) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
    }
}

SimpleCalculator(5, 5, 'multiply')
SimpleCalculator(40, 8, 'divide')
SimpleCalculator(12, 19, 'add')
SimpleCalculator(50, 13, 'subtract')