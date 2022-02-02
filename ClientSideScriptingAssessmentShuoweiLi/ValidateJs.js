

/** call the functions */

document.getElementById("contactForm").onsubmit = function () {
    let isValidName = validateName();
    let isValidPhone = validatePhone();
    let isValidEmail = validateEmail();
    let isValidGender = validateGender();
    let isValidLeaveMes = validateLeaveMes();
    
    return isValidName && (isValidPhone || isValidEmail) && isValidGender && isValidLeaveMes;
}


/** validate name input value */

function validateName() {
    let x = document.getElementById("txtName").value;
    /** valid - Username field must contain at least two letters (uppercase and lowercase)*/

    if (/[a-z]/.test(x) && /[A-Z]/.test(x)) {
        document.getElementById("txtName_Help").innerText = "";
        return true;
    }
    else {
        /** invalid;*/

        document.getElementById("txtName_Help").innerText = "Name must contain at least one lowercase and one uppercase characters";
        return false;
    }
}
/** validate phone input value */

function validatePhone() {
    /** Phone field must contain digits only */

    let x = document.getElementById("txtPhone").value;
    if (x === "" || isNaN(x)) {
        /** invalid - missing value or non numeric value */
        document.getElementById("txtPhone_Help").innerText = "phone must contain digits only";
        return false;
    }
    else {
        /** valid */

        document.getElementById("txtPhone_Help").innerText = "";
        return true;
    }

}

/** validate email input value */

function validateEmail() {
    /** Email field must contain a valid email format */

    let x = document.getElementById("txtEmail").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)) {
        return true;
    }

    else {
        /** valid */

        document.getElementById("txtEmail_Help").innerText = "Email field must contain a valid email format";
        return false;
    }

}

/** validate gender input value */

function validateGender() { 
    /** Gender must not be null */

    let x = document.getElementById("txtGender").value;
    if (x === "") {
        document.getElementById("txtGender_Help").innerText = "Gender field cannot be left empty";
        return false;
    }
    else {
        document.getElementById("txtGender_Help").innerText = "";
        return true;
    }
}


/** validate massage input value */

function validateLeaveMes() {
    /** Message field cannot be left empty */

    let x = document.getElementById("txtLeaveMes").value;
    console.log(x);
    console.log(x === "");
    if (x === "") {
        document.getElementById("txtLeaveMes_Help").innerText = "Message field cannot be left empty";
        return false;
    }
    else {/** valid */

        document.getElementById("txtLeaveMes_Help").innerText = "";
        return true;
    }
}
