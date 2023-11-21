document.addEventListener('DOMContentLoaded', function () {
    var searchDivs = document.querySelectorAll('div[id]');

    searchDivs.forEach(function (div) {
        div.addEventListener('click', function () {
            var recipeName = div.id.replace(/([A-Z])/g, ' $1').trim(); // Add space before capital letters and trim

            var googleSearchURL = 'https://www.google.com/search?q=' + encodeURIComponent(recipeName + ' recipes');

            window.open(googleSearchURL, '_blank');
        });
        div.style.cursor = 'pointer';
    });
});