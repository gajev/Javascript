function FormatGrade(grade) {
    let description = ""
    if (grade < 3) {
        console.log(`Fail (2)`);
    } else if (grade < 3.5) {
        description = "Poor";
    } else if (grade < 4.5) {
        description = "Good";
    } else if (grade < 5.5) {
        description = "Very good";
    } else {
        description = "Excellent"
    }
    if (description) {
        console.log(`${description} (${grade.toFixed(2)})`)
    }
}

FormatGrade(2.99)


