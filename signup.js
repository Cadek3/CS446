document.getElementById('openPopup').addEventListener('click', function () {
    document.getElementById('signupPopup').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('signupPopup').style.display = 'none';
});

function on() {
    document.getElementById("overlay").style.display = "block";
}
function off() {
    document.getElementById("overlay").style.display = "none";
}