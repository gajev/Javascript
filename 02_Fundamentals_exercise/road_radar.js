function RoadRadar(speed, area) {
    let SpeedLimit = 0;
    let WithLimits = false
    let difference = 0

    if (area === "motorway") {
        SpeedLimit = 130
        if (speed <= SpeedLimit) {
            WithLimits = true
        } else {
            difference = speed - 130
        }
    } else if (area === "interstate") {
        SpeedLimit = 90
        if (speed <= 90) {
            WithLimits = true
        } else {
            difference = speed - 90
        } 
    } else if (area === "city") {
        SpeedLimit = 50
        if (speed <= 50) {
            WithLimits = true
        } else {
            difference = speed - 50
        } 
    } else if (area === "residential") {
        SpeedLimit = 20
        if (speed <= 20) {
            WithLimits = true
        } else {
            difference = speed - 20
        } 
    }
    if (WithLimits) {
        console.log(`Driving ${speed} km/h in a ${SpeedLimit} zone`)
    } else {
        let status = ""
        if(difference <= 20) {
            status = "speeding";
        } else if (difference <= 40) {
            status = "excessive speeding"
        } else {
            status = "reckless driving"
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${SpeedLimit} - ${status}`)
    }   
    }
RoadRadar(70, 'city')
RoadRadar(40, 'residential')
RoadRadar(110, 'interstate')
RoadRadar(150, 'motorway')

