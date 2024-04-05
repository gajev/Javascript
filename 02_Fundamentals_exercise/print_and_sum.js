function PrintAndSum(a, b){
    let sum = 0
    let numbers = []
    for(let i=a; i<=b; i++) {
        sum += i
        numbers.push(i)
    }
    console.log(numbers.join(" "))
    console.log(`Sum: ${sum}`)
}
PrintAndSum(0, 26)