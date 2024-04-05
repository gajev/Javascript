function Fruit(fruit, weight, price){
    let WeightKilograms = (weight / 1000);
    let CurrentPrice = WeightKilograms * price
    console.log(`I need $${CurrentPrice.toFixed(2)} to buy ${WeightKilograms.toFixed(2)} kilograms ${fruit}.`)
}

Fruit ('apple', 1563, 2.35)