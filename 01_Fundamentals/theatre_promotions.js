function TheatrePromotions(day, age) {
    if (age < 0 || age > 122) {
        console.log("Error!")
    } else if (age < 19) {
        if (day === "Weekday") {
            console.log("12$")
        } else if (day === "Weekend") {
            console.log("15$")
        }
        else if (day === "Holiday") {
            console.log("5$")
        }
    }
        else if (age < 65) {
            if (day === "Weekday") {
                console.log("18$")
            } else if (day === "Weekend") {
                console.log("20$")
            }
            else if (day === "Holiday") {
                console.log("12$")
            }
        }
        else {
                if (day === "Weekday") {
                    console.log("12$")
                } else if (day === "Weekend") {
                    console.log("15$")
                } else if (day === "Holiday") {
                    console.log("10$")
                }
            }
        }

        TheatrePromotions("Weekday", -8)
        TheatrePromotions("Weekend", 54)
        TheatrePromotions("Holiday", 10)
        TheatrePromotions("Weekday", 33)
        TheatrePromotions("Holiday", 69)
        TheatrePromotions("Weekend", 150)