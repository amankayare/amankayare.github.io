
function validation(){
    emailValidation();
    mobileValidation();
}
function emailValidation() {
    var email=document.getElementById('email').value;

    // email should not be empty
    if (email=="") {
        document.getElementById('message').append('**email can not be empty"');
        return false;
    }
    // '@' should not be the first 
    if (email.indexOf('@')<=0) {
        document.getElementById('message').innerHTML="**invalid email format ('@')**";
        return false;
    } 
    // .com or .in position in last is not valid
    if ((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')) {
        document.getElementById('message').innerHTML="**invalid email format('.')**";
        return false;

    }
    else{
        document.getElementById('done').innerHTML="successfully submitted";
        return false;
    }
}

function mobileValidation() {
    var phoneNumber=document.getElementById('phoneNumber').value;
    // input field can not be empty 
    if(phoneNumber==""){
        document.getElementById('message').innerHTML="**please enter the phone Number**"
        return false;
    }
    // number should start with 9,8,7 only
    if (phoneNumber.charAt(0)!=9 && phoneNumber.charAt(0)!=8 && phoneNumber.charAt(0)!=7) {
        document.getElementById('message').innerHTML="**Phone Number should start with only 9,7,8 **"
        return false;
    }
    // number should be of 10 digit
    if (phoneNumber.length!=10) {
        document.getElementById('message').innerHTML="**Phone Number should 10 digit only**"
        return false;
    }
    // number should not contain alfabets
    if (isNaN(phoneNumber)) {
        document.getElementById('message').innerHTML="**Only digits are allowed **"
        return false;
    }
    // successfully submitted
    else {
        $("#message").hide()   // the element with id="demo"

        document.getElementById('done').innerHTML="successfully submitted"; 
        return false;
    }
}