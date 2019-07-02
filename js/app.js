let heading = document.querySelectorAll('.heading')
heading.forEach(function (headingElement) {
    headingElement.className += ' animated zoomIn'
});
//heading.className += ' animated zoomIn';
let navbarBrand = document.querySelector('.navbar-brand')
navbarBrand.className += ' animated slideInRight';


// NAVBAR SOLID
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 470) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    });
});