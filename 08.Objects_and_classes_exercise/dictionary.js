function Dictionary(array){
    let dictionary = {};
    array.forEach(jsonString => {
        let obj = JSON.parse(jsonString);
        for(const key in obj) {
            if(dictionary.hasOwnProperty(key)) {
                dictionary[key] = obj[key]
            } else {
                dictionary[key] = obj[key]
            }
        }
    });
    const sortedKeys = Object.keys(dictionary).sort();
    const sortedDictionary = {};
    sortedKeys.forEach(key => {
        sortedDictionary[key] = dictionary[key];
    });

    sortedKeys.forEach(key => {
        console.log(`Term: ${key} => Definition: ${sortedDictionary[key]}`);
    });
}

Dictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}', '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}','{"Coffee":"test"}'])