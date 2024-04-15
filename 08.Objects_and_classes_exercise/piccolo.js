function Piccolo(array){
    let parking = []
    array.forEach(currentCar => {     
        let [direction, plateNumber] = currentCar.split(", ");
        if (direction === "IN" && !parking.includes(plateNumber)){
            parking.push(plateNumber)
        } else if (direction === "OUT" && parking.includes(plateNumber)) {
            let indexToRemove = parking.indexOf(plateNumber);
            parking.splice(indexToRemove, 1);
        }
    });
    if (parking.length > 0){
        let sortedParking = parking.sort((a, b) => a.localeCompare(b));
        sortedParking.forEach(n => console.log(n));
    } else console.log('Parking Lot is Empty');
}

Piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])
Piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA'])