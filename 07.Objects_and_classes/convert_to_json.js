function ConvertToJSON(name, lastName, hairColor){
    const person = {
        name,
        lastName,
        hairColor
    }
    console.log(JSON.stringify(person))
}

ConvertToJSON('George', 'Jones', 'Brown')