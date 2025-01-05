const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');
// event listener
navTriggerBtn.addEventListener('click', ()=> {
    navMenu.classList.toggle('nav-is-open');
})

// swipper
const swiper = new Swiper('.swiper',{
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // breakpoints
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        960: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
})

// scroll reveal animation
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 3000,
        delay: 400,
        // reset:true,
    })
    // hero
    sr.reveal('.hero__text', {origin: 'top'})

    // steps
    sr.reveal('.steps__step', {distance: '100px', interval:70})

    // about
    sr.reveal('.about__text', {origin: 'left'})
    sr.reveal('.about__img', {origin: 'right', delay:500})

    // testimonial
    sr.reveal('.testimonial__bg', {delay:500})
    sr.reveal('.testimonial__tittle')
    sr.reveal('.testimonial__slider', {delay:700})

    // brands
    sr.reveal('.brands__img', {delay:500, distance: '100px', interval:100})

    // work
    sr.reveal('.work__tittle')
    sr.reveal('.work__subtittle', {delay:200})
    sr.reveal('.work__grid', {delay:500})

    // stats
    sr.reveal('.stats')
    sr.reveal('.stats__item', {
        distance: '100px',
        interval: 100,
    })

    // news
    sr.reveal('.news__tittle')
    sr.reveal('.news__subtittle', {delay:200})
    sr.reveal('.news__item', {
        distance: '100px',
        interval: 90,
        delay: 400,
    })

    // contact
    sr.reveal('.contact__container')
    sr.reveal('.contact__text', {delay:500})

    //footer
    sr.reveal('.footer__item', {
        distance: '100px',
        interval: 90,
        delay: 700,
    })
    sr.reveal('.footer__copyright');
 
    
