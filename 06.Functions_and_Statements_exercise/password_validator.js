function PasswordValidator(password) {
    let passwordIsValid = true
    let digitsCount = 0
    let regex = /^[a-zA-Z0-9]+$/;
    if (password.length < 6 || password.length > 10) {
        passwordIsValid = false
        console.log(`Password must be between 6 and 10 characters`)
    }
    if (!regex.test(password)){
        passwordIsValid = false
        console.log(`Password must consist only of letters and digits`)
    }
    for (i=0; i < password.length; i++){
        if (!isNaN(password[i])){
            digitsCount += 1
        }
    }
    if(digitsCount < 2){
        passwordIsValid = false
        console.log(`Password must have at least 2 digits`)
    }
    if (passwordIsValid){
        console.log(`Password is valid`)
    }
}

PasswordValidator('logIn')
PasswordValidator('MyPass123')
PasswordValidator('Pa$s$s')