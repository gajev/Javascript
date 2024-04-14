function Meetings(array){
    let meetings = {}
    array.forEach(meeting => {
        meetingsAsArray = meeting.split(" ")
        if (meetings.hasOwnProperty(meetingsAsArray[0])){
            console.log(`Conflict on ${meetingsAsArray[0]}!`)
        } else {
            meetings[meetingsAsArray[0]] = meetingsAsArray[1]
            console.log(`Scheduled for ${meetingsAsArray[0]}`)
        }
    });
    keys = Object.keys(meetings)
    keys.forEach(key => {
        console.log(`${key} -> ${meetings[key]}`)
    });
}

Meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])