 // getting html nodes
const form = document.querySelector('form')
const userName = document.getElementById('user')
const email = document.getElementById('email')
const password = document.getElementById('pass')
const confirmPassword = document.getElementById('confpass')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    // initilizing necessary variables 
    let userValue = userName.value.trim() || ''
    let emailValue = email.value.trim() || ''
    let passValue = password.value || ''
    let confirmValue = confirmPassword.value || ''

    let userRegex = /^[a-zA-Z0-9_]{5,16}$/
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/

        // gets the boolean value from function according to condition 
    let isUserValid = validateUser(userValue, userRegex)
    let isEmailValid = validateEmail(emailValue, emailRegex)
    let isPassValid = ValidatePass(passValue, passRegex)
    let isPassConfirm = conformPass(passValue, confirmValue)

    if (isUserValid && isEmailValid && isPassValid && isPassConfirm) { // resets every input feild after showing alert messge
        alert("regristation complete")
        userName.value = ''
        email.value = ''
        password.value = ''
        confirmPassword.value = ''
    }
})

function validateUser(value, reg) {
    let errors = document.getElementById('usermessage')
    if (value === '') {
        errors.textContent = "Username is required."
        return false // this returns false then it automatically validateUser false and program moves on executig new function 

    } else if (!reg.test(value)) {
        errors.textContent = "5–16 characters. Letters, numbers, and underscores only"
        return false

    } else {
        errors.textContent = ''
        return true
    }
}

function validateEmail(value, reg) {
    let errors = document.getElementById('mailmessage')
    if (value === '') {
        errors.textContent = "Email is required."
        return false

    } else if (!reg.test(value)) {
        errors.textContent = "Enter a valid email address (e.g. name@example.com)."
        return false

    } else {
        errors.textContent = ''
        return true
    }
}

function ValidatePass(value, reg) {
    let errors = document.getElementById('passmessage')
    if (value === '') {
        errors.textContent = "Password is required."
        return false

    } else if (!reg.test(value)) {
        errors.textContent = "8+ characters with uppercase, lowercase, number, and symbol."
        return false

    } else {
        errors.textContent = ''
        return true
    }

}

function conformPass(value, confirm) {
    let error = document.getElementById('confirmmessage')
    if (confirm === '') {
        error.textContent = 'Please confirm your password.'
        return false
    }
    else if (value === confirm) {
        error.textContent = ''
        return true
    } else {
        error.textContent = 'password dont match'
        return false
    }


}