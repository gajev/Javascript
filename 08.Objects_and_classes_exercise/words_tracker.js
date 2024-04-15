function WordsTracker(array){
    objects = {}
    const searchedWords = array.shift()
    const searchedWordsList = searchedWords.split(" ")
    searchedWordsList.forEach(word => {
        objects[word] = 0
    });
    array.forEach(element => {
        if(objects.hasOwnProperty(element)){
            objects[element] += 1
        }
    });
    let entries = Object.entries(objects).sort((a,b)=> b[1] - a[1]);
    for (const [key, value] of entries) {
        console.log(`${key} - ${value}`);
    }
}

WordsTracker([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])

WordsTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])