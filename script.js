document.addEventListener('DOMContentLoaded', function () {
    var searchImage = document.getElementById('search-image');
    var searchPopup = document.getElementById('search-popup');

    searchImage.addEventListener('click', function (event) {
        searchPopup.style.display = 'block';
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        var isClickInside = searchPopup.contains(event.target);
        if (!isClickInside) {
            searchPopup.style.display = 'none';
        }
    });
});