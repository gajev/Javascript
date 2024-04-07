function Hashtag(text) {
    let regex = /#([A-Za-z]+)/g;
    let matches = text.match(regex);

    matches.forEach(word => {
        console.log(word.substring(1, word.length))
    });
}

Hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia')
Hashtag('The symbol # is known #variously in English-speaking #regions as the #number sign')
