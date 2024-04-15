function OddOccurrences(input){
    let occurrences = {};
    const inputArray = input.split(" ")
    inputArray.forEach(element => {
        if(occurrences.hasOwnProperty(element.toLowerCase())){
            occurrences[element.toLowerCase()] += 1
        } else {
            occurrences[element.toLowerCase()] = 1
        }
    });
    let result = []
    for(let key in occurrences) {
        if(occurrences[key] % 2 !=0){
        result.push(key)
    }
    }
    console.log(result.join(" "));
}

OddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')