function Vacation(people, group, day) {
    let total = 0;
    let price = 0;

    if (group === "Students") {
        if (day === "Friday") {
            price = 8.45
        } else if (day === "Saturday") {
            price = 9.8
        }
        else if (day === "Sunday") {
            price = 10.46
        }
        if (people >= 30){
            total = price * people * 0.85
        } else total = price * people
    }
    else if (group === "Business") {
        if (day === "Friday") {
            price = 10.9
        } else if (day === "Saturday") {
            price = 15.6
        }
        else if (day === "Sunday") {
            price = 16
        }
        if (people >= 100){
            total = (people - 10) * price
        } else total = price * people
    }
    else {
        if (day === "Friday") {
            price = 15
        } else if (day === "Saturday") {
            price = 20
        } else if (day === "Sunday") {
            price = 22.5
        }
        if (people >= 10 && people <= 20 ){
            total = price * people * 0.95
        } else total = price * people
    }
    console.log(`Total price: ${total.toFixed(2)}`)
}

Vacation(40, "Regular", "Saturday")
