function CircleArea(argument) {
    if(typeof(argument) != "number") {
        console.log (`We can not calculate the circle area, because we receive a ${typeof(argument)}.`)
    } else {
        console.log ((Math.PI * Math.pow(argument, 2)).toFixed(2))
    }
}

CircleArea(1)
CircleArea(2)
CircleArea("name")



