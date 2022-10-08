/* Slider */
const swiper = new Swiper('.slider-intro', {
    // Optional parameters
    direction: 'vertical',
    spaceBetween: 40,
    slidesPerView: 'auto',
    slidesOffsetAfter: 0,
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    mousewheel: {
        forceToAxis: true,
        sensitivity: .5,
    },
});

const swiperLocation = new Swiper('.slider-location', {
    // Optional parameters
    spaceBetween: 20,
    loop: true,
    slideActiveClass: 'location-slide-active',
    // And if we need scrollbar
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        800: {
            slidesPerView: 1.5,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 1.8,
            spaceBetween: 40
        }
    }
});


/* Burger */
const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.menu')
const body = document.body

burger.addEventListener('click', () => {
    burger.classList.toggle('_active')
    menu.classList.toggle('_active')
    body.classList.toggle('_lock')
})

menu.addEventListener('click', () => {
    burger.classList.remove('_active')
    menu.classList.remove('_active')
    body.classList.remove('_lock')
})