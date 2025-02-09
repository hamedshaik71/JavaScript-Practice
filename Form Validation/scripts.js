var nameError = document.getElementById("nameError");
var phoneError = document.getElementById("phoneError");
var emailError = document.getElementById("emailError");
var messageError = document.getElementById("messageError");
var submitError = document.getElementById("submitError");

function validateName(){
    var name = document.getElementById("contactName").value;
    if(name.length==0){
        nameError.innerHTML = "Name is required!";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name!";
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validatePhone() {
    var phone = document.getElementById('contactPhone').value;
    if (phone.length ==0) {
        phoneError.innerHTML = "Phone is required";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Use only digits";
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById('contactEmail').value;
    if (email.length ==0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email invaild";
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateMessage() {
    var message = document.getElementById('contactMessage').value;
    var required = 30;
    var left = required-message.length;
    if (left>0) {
        messageError.innerHTML = left + "more characters left";
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fill all the fields!"
        setTimeout(function() {
            submitError.style.display = "none"
        },3000);
        return false;
    }
    
}