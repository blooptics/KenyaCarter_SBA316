let nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const sugError = document.getElementById("suggestion-error");
const submitError = document.getElementById("sub-error");


// Adding BOM
// window.alert("Welcome to the Suggestion Box!");


// Making sure name is valid
function validateName() {

    let nameValue = document.getElementById("contact-name").value.trim();
    let nameError = document.getElementById("name-error");

    // If the name is empty
    if (nameValue.length === 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }

    // first name and inital
    if (!nameValue.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
        nameError.innerHTML = "❌";
        return false;
    }

    // When its vaild
    nameError.innerHTML = '✅';
    return true;
}

function validateEmail() {
    let email = document.getElementById("email-name").value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    // has to have @ and .com
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '✅';
    return true;

}

function validateForm() {
    if(!validateName() || !validateEmail()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix errors to submit";
        setTimeout(function(){submitError.style.display = "none"}, 3000);
        return false;
    }
}