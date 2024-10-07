function loginValidation() {
    const email = document.getElementById("Email");
    const password = document.getElementById("Password");

    if (email.value.trim().length === 0) {
        alert("Please enter your Email");
        return false;
    }

    if (!isValidEmail(email.value)) {
        alert("Please enter a valid Email address");
        return false;
    }

    if (password.value.length === 0) {
        alert("Please enter your password");
        return false;
    }

    if (password.value.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    alert("Log in successful");
    return true;
}

function isValidEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function forgotPassword() {
    let emailInput = document.getElementById("email");
    let email = emailInput.value.trim(); 

    if (email.length === 0) {  
        alert("Please enter your Email");
        return; 
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address");
        return;
    }

    alert("If your email exists, you'll receive a password reset link shortly.");
}


function signinValidation() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    if (email.value.trim().length === 0) {
        alert("Please enter your Email");
        return false;
    }

    if (!isValidEmail(email.value)) {
        alert("Please enter a valid Email address");
        return false;
    }

    if (password.value.length === 0) {
        alert("Please enter your password");
        return false;
    }

    if (password.value.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match");
        return false;
    }

    alert("Sign-in successful");
    return true;
}

