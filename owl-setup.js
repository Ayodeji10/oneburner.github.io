var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 5
        },
        960: {
            items: 7
        },
        1200: {
            items: 7   // change this number to change number of items to appear
        }
    }
});