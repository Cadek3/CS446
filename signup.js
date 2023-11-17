// signup.js

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

// Event listener for the "Sign Up" link in the top bar
document.querySelector('.signup-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('signupPopup').style.display = 'block';
    on();
});
