// $(document).ready(
//     function () {
//         $('.heading').addClass("animated zoomIn");
//         $('.navbar-brand').addClass("animated slideInRight");
//     });

let heading = document.querySelectorAll('.heading')
heading.forEach(function (headingElement) {
    headingElement.className += ' animated zoomIn'
});
//heading.className += ' animated zoomIn';
let navbarBrand = document.querySelector('.navbar-brand')
navbarBrand.className += ' animated slideInRight';