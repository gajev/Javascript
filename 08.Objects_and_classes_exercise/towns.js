function Towns(array){
    townsList = []
    array.forEach(element => {
        splitArray = element.split(" | ")
        let currentTown = {
            town: splitArray[0],
            latitude: Number(splitArray[1]).toFixed(2),
            longitude: Number(splitArray[2]).toFixed(2),
        }
        townsList.push(currentTown)
    })
    townsList.forEach(town => {
        console.log(town)
    });
}

Towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])