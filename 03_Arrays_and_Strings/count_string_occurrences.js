function CountOccurences(text, word) {
    let counter = 0;
    TextAsArray = text.split(" ")
    TextAsArray.forEach(element => {
        if (element === word) {
            counter += 1
        }
    });
    console.log(counter)
}

CountOccurences('softuni is great place for learning new programming languages', 'softuni')