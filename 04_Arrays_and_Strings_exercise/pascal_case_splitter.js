    function  PascalCaseSplitter(text){
        let regex = /[A-Z][a-z]*/gm
        let matches = text.match(regex);
        console.log(matches.join(", "))
    }

PascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
PascalCaseSplitter('HoldTheDoor')
PascalCaseSplitter('ThisIsSoAnnoyingToDo')