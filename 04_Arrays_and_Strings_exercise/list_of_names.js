function ListOfNames(names){
    let orderedNames = names.sort((a, b) => a.localeCompare(b));
    for (i=0; i < orderedNames.length; i++) {
        console.log(`${i + 1}.${orderedNames[i]}`)
    }
}

ListOfNames(["John", "Bob", "Christina", "Ema"])
