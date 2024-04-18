function subtract() {
    const firstNumber = Number((document.getElementById("firstNumber").value))
    const secondNumber = Number((document.getElementById("secondNumber").value))
    const result = firstNumber - secondNumber
    let finalResult = document.getElementById("result")
    finalResult.textContent = result
}