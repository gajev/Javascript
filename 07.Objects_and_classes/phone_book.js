function PhoneBook(array){
    let phoneBook = {}
    array.forEach(contact => {
        contactAsArray = contact.split(" ")
        if (phoneBook.hasOwnProperty(contactAsArray[0])){
            phoneBook[contactAsArray[0]] = contactAsArray[1]
        } else {
            phoneBook[contactAsArray[0]] = contactAsArray[1]
        }
    });
    keys = Object.keys(phoneBook)
    keys.forEach(element => {
        console.log(`${element} -> ${phoneBook[element]}`)
    });
}

PhoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])
