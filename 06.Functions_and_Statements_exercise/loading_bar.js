function LoadingBar(number) {
    if (number === 100) {
        console.log(`100% Complete!`)
    } else {
        let countPercentage = number / 10;
        let countDots = 10 - countPercentage;
        let percentageSymbols = "%".repeat(countPercentage);
        let dotsSymbols = ".".repeat(countDots);
        console.log(`${number}% [${percentageSymbols}${dotsSymbols}]
Still loading...`);

    }
}

LoadingBar(30)
LoadingBar(50)
LoadingBar(100)