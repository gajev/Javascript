function Employees(array) {
    let employees = []
    array.forEach(person => {
        let employee = {
            employeeName: person,
            personalNum: person.length
        };
        employees.push(employee)
    })
    employees.forEach(element => {
        console.log(`Name: ${element.employeeName} -- Personal Number: ${element.personalNum}`)
    });
}

Employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])