function sumTable() {
    const rows = document.getElementsByTagName("td");
    let result = 0
    for (let index = 1; index < rows.length - 1; index += 2) {
        const currentPrice = Number((rows[index]).textContent)
        result += currentPrice
        }
    const total = document.getElementById("sum");    
        total.textContent = result
}