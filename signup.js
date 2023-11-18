// Sign up and Login functions

document.getElementById('openPopup').addEventListener('click', function () {
    document.getElementById('signupPopup').style.display = 'block';
    on();
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('signupPopup').style.display = 'none';
    off();
});

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}


document.querySelector('.signup-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('signupPopup').style.display = 'block';
    on();
});

function onLogin() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("loginPopup").style.display = "block";
    document.getElementById("signupPopup").style.display = "none"; // Close signup popup
}

function offLogin() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("loginPopup").style.display = "none";
}

document.getElementById('openLoginPopup').addEventListener('click', function () {
    onLogin();
});

document.getElementById('closeLoginPopup').addEventListener('click', function () {
    offLogin();
});

function onSignup() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("signupPopup").style.display = "block";
    document.getElementById("loginPopup").style.display = "none"; // Close login popup
}

document.getElementById('signupLink').addEventListener('click', function () {
    onSignup();
});

