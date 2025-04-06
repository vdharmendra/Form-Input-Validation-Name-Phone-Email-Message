var nameError = document.getElementById('nameError');
var phoneError = document.getElementById('phoneError');
var emailError = document.getElementById('emailError');
var messageError = document.getElementById('messageError');
var submitError = document.getElementById('submitError');

function validateName(){
    var fName = document.getElementById('fName').value;

    if(fName.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!fName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full Name';
        return false;
    }
    nameError.innerHTML = '<i class="bi bi-check-square-fill"></i>';
    return
}

function validatePhone(){
    var phoneNumber = document.getElementById('pNumber').value;

    if(phoneNumber.length == 0){
        phoneError.innerHTML = 'Phone Number is required';
        return false;

    }
    if(phoneNumber.length !== 10){
        phoneError.innerHTML = 'Phone no. should be 10 digits';
        return false;
    }
    if(!phoneNumber.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

    phoneError.innerHTML = '<i class="bi bi-check-square-fill"></i>';
    return true;
}

function validateEmail(){
    var emailAddress = document.getElementById('emailAddress').value;

    if(emailAddress.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!emailAddress.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invaild';
        return false;
    }

    emailError.innerHTML = '<i class="bi bi-check-square-fill"></i>';
    return true;
}

function validateMessage(){
    var contactMessage = document.getElementById('contactMessage').value;
    var required = 30;
    var left = required - contactMessage.length;

    if(left > 0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="bi bi-check-square-fill"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}