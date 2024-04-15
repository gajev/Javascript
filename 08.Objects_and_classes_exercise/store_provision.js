function StoreProvision(initialStock, orderedStock) {
    let stock = []
    for (let i = 0; i < initialStock.length; i += 2) {
        let currentStock = {
            [initialStock[i]]: Number(initialStock[i + 1])
        };
        stock.push(currentStock)
    }
    for (let j = 0; j < orderedStock.length; j += 2) {
        let productFound = false;
        for (let k = 0; k < stock.length; k++) {
            if (stock[k].hasOwnProperty(orderedStock[j])) {
                stock[k][orderedStock[j]] += Number(orderedStock[j + 1]);
                productFound = true
                break
            }
        }
        if (!productFound) {
            let currentStock = {
                [orderedStock[j]]: Number(orderedStock[j + 1])
            };
            stock.push(currentStock)
        }
    }
    stock.forEach(item => {
        let itemName = Object.keys(item)[0];
        let itemQuantity = item[itemName];
        console.log(`${itemName} -> ${itemQuantity}`);
    });   
}


StoreProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ])

StoreProvision([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])