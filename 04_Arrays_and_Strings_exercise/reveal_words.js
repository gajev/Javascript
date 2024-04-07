function RevealWords(searched_words, text) {
    let wordsArray = text.split(" ");
    let SearchedWordsArray = searched_words.split(", ");

    wordsArray.forEach((element, index) => {
        if (element[0] === "*") {
            SearchedWordsArray.forEach(current_word => {
                if (current_word.length == element.length) {
                    wordsArray[index] = current_word;
                }
            })
        }
    });
    console.log(wordsArray.join(" "))
}

RevealWords('great', 'softuni is ***** place for learning new programming languages')
RevealWords('great, learning','softuni is ***** place for ******** new programming languages')