function AddressBook(array){
    let people = {}
    array.forEach(person => {
        peopleAsArray = person.split(":")
        if (people.hasOwnProperty(peopleAsArray[0])){
            people[peopleAsArray[0]] = peopleAsArray[1]
        } else {
            people[peopleAsArray[0]] = peopleAsArray[1]
        }
    });
    let sortedKeys = Object.keys(people).sort();
    sortedKeys.forEach(key => {
        console.log(`${key} -> ${people[key]}`)
    });
}


AddressBook(['Tim:Doe Crossing','Bill:Nelson Place', 'Peter:Carlyle Ave','Bill:Ornery Rd'])
