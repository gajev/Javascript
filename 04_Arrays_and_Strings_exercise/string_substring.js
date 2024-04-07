function StringSubstring(searched_word, text) {
    let found = false;
    let TextAsArray = text.split(" ")
    TextAsArray.forEach(element => {
        if (element.toLowerCase() === searched_word.toLowerCase()) {
            found = true
            return console.log(searched_word)
        }
    });
    if (!found){
    console.log(`${searched_word} not found!`)
    }
}

StringSubstring('javascript', 'JavaScript is the best programming language')
StringSubstring('python', 'JavaScript is the best programming language')