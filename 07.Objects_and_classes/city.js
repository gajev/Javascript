function City(city){
    const keys = Object.keys(city)
    keys.forEach(key => {
        console.log(`${key} -> ${city[key]}`)
    })
}

City({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })