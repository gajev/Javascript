function ConvertToObject(json){
    let person = JSON.parse(json)
    keys = Object.keys(person)
    keys.forEach(key => {
        console.log(`${key}: ${person[key]}`)
    });
}

ConvertToObject('{"name": "George", "age": 40, "town": "Sofia"}')