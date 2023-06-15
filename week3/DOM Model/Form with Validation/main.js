"use strict";

const validateNameLength = function(name, length) {
    return (name.length > length);
}

const validateSalary = function(salary, min, max) {
    return ((salary > min) && (salary < max));
}

const validateBirthday = function(birthday) {
    return (birthday)
}

const validatePhone = function(phone) {
    let digits = "0123456789";
    for (let char of phone) {
        if (!(digits.includes(char))) {
            return false;
        }
    }
    if (phone.length != 10) return false;
    return true; 
}


const validate = function() {
    let hasError=false;
    let error = document.getElementById("error");
    error.innerHTML = "";
    if (!validateNameLength(document.getElementById("name").value, 2)) {
        error.innerHTML += "Name is too short\n";
        hasError = true;
    }
    if (!validateSalary(document.getElementById("salary").value, 10000, 16000)) {
        error.innerHTML += "Desired salary too small/large\n";
        hasError = true;
    }
    if (!validateBirthday(document.getElementById("birthday").value)) {
        error.innerHTML += "Please provide birthday\n";
        hasError = true;
    }
    if (!validatePhone(document.getElementById("phone").value)) {
        error.innerHTML += "Phone should be 10 digits long, no other chars\n";
        hasError = true;
    }
    if (!hasError) {
        document.getElementById("container").style.display = "none";
    }
}