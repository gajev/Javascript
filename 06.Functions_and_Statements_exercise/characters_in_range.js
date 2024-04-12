function CharactersInRange(a, b) {
    let result = []
    let startCode = a.charCodeAt(0);
    let endCode = b.charCodeAt(0);
    if (startCode > endCode) {
        let temp = startCode;
        startCode = endCode;
        endCode = temp;
    }
    for (let code = startCode + 1; code < endCode; code++) {
        result.push(String.fromCharCode(code));
    }
    console.log(result.join(" "))
}

CharactersInRange('a', 'd')