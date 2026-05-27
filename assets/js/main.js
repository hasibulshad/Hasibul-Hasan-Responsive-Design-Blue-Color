// /*=============== SHOW & CLOSE MENU ===============*/
// const navMenu = document.getElementById('nav-menu'),
//       navToggle = document.getElementById('nav-toggle'),
//       navClose = document.getElementById('nav-close')

// if(navToggle){
//    navToggle.addEventListener('click', () =>{
//       navMenu.classList.add('show-menu')
//    })
// }

// if(navClose){
//    navClose.addEventListener('click', () =>{
//       navMenu.classList.remove('show-menu')
//    })
// }

// /*=============== REMOVE MOBILE MENU ===============*/
// const navLink = document.querySelectorAll('.nav__link, .nav__contact')

// const linkAction = () =>{
//    const navMenu = document.getElementById('nav-menu')
//    navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

// /*=============== HOME TEXT CIRCULAR ===============*/
// const homeText = document.getElementById('home-text'),
//       letters = homeText.textContent.trim().split(''),
//       angleStep = 360 / letters.length

// homeText.textContent = ''

// letters.forEach((char, i) => {
//    const span = document.createElement('span')
//    span.textContent = char
//    span.style.transform = `rotate(${i * angleStep}deg)`
//    homeText.appendChild(span)
// })

// /*=============== HOME TYPED JS ===============*/
// const typedHome = new Typed('#home-typed', {
//    strings: ['Software Developer', 'Web Developer','Freelancer','SEO Specialist'],
//    typeSpeed: 60,
//    backSpeed: 30,
//    backDelay: 1000,
//    loop: true,
// })

// /*=============== CHANGE HEADER STYLES ===============*/
// const scrollHeader = () =>{
//    const header = document.getElementById('header')
//    window.scrollY >= 50 ? header.classList.add('scroll-header')
//                         : header.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', scrollHeader)

// /*=============== SWIPER WORK ===============*/ 
// const swiperWork = new Swiper('.work--swiper', {
//    loop: true,
//    spaceBetween: 24,
//    slidesPerView: 'auto',
//    grabCursor: true,
//    speed: 600,
//    pagination: {
//      el: '.swiper-pagination',
//      clickable: true,
//    },
//    autoplay: {
//        delay: 2000,
//        disableOnInteraction: false,
//    }
// })

// /*=============== SERVICES ACCORDION ===============*/ 
// const servicesCards = document.querySelectorAll('.services--card'),
//       servicesButtons = document.querySelectorAll('.services--button')

// servicesButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const currentCard = button.closest('.services--card'),
//               isOpen = currentCard.classList.contains('services-open')

//         servicesCards.forEach(card => {
//             card.classList.replace('services-open', 'services-close')
//         })

//         if(!isOpen){
//             currentCard.classList.replace('services-close', 'services-open')
//         }
//     })
// })

// /*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 
// const tracks = document.querySelectorAll('.testimonials--content')

// tracks.forEach(track => {
//     const cards = [...track.children]
//     for (const card of cards) {
//         track.appendChild(card.cloneNode(true))
//     }
// })

// /*=============== CONTACT EMAIL JS ===============*/ 
// const contactForm = document.getElementById('contact-form'),
//       contactMessage = document.getElementById('contact-message')

// const sendEmail = async (e) => {
//    e.preventDefault()

//    try {
//       await emailjs.sendForm('service_x85dreb','template_8dn2iz9','#contact-form','PLP1wfiMWk9azEfkG')
//       contactMessage.textContent = 'Message sent successfully ✅'
//       contactForm.reset()
//    } catch (error) {
//       contactMessage.textContent = 'Message not sent (service error) ❌'
//    } finally {
//       setTimeout(() => {
//          contactMessage.textContent = ''
//       }, 5000)
//    }
// }
// contactForm.addEventListener('submit', sendEmail)

// /*=============== SHOW SCROLL UP ===============*/ 
// const scrollUp = () => {
//     const scrollUpButton = document.getElementById('scroll-up')
//     window.scrollY >= 350 ? scrollUpButton.classList.add('show-scroll')
//                           : scrollUpButton.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)

// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')

// const scrollActive = () => {
//     const scrollY = window.scrollY

//     sections.forEach(section => {
//         const id = section.id,
//               top = section.offsetTop - 50,
//               height = section.offsetHeight,
//               link = document.querySelector('.nav__menu a[href*=' + id + ']')

//         if(!link) return

//         if(scrollY > top && scrollY <= top + height) {
//             link.classList.add('active-link')
//         } else {
//             link.classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

// /*=============== CUSTOM CURSOR ===============*/
// const cursor = document.querySelector('.cursor')
// let mouseX = 0, mouseY = 0

// const cursorMove = () => {
//     cursor.style.left = `${mouseX}px`
//     cursor.style.top = `${mouseY}px`
//     cursor.style.transform = 'translate(-50%, -50%)'
//     requestAnimationFrame(cursorMove)
// }

// document.addEventListener('mousemove', (e) => {
//     mouseX = e.clientX
//     mouseY = e.clientY
// })

// cursorMove()

// const allLinks = document.querySelectorAll('a')
// allLinks.forEach(item => {
//     item.addEventListener('mouseover', () => {
//         cursor.classList.add('hide-cursor')
//     })
//     item.addEventListener('mouseleave', () => {
//         cursor.classList.remove('hide-cursor')
//     })
// })

// /*=============== SCROLLREVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//     origin: 'bottom',
//     distance: '60px',
//     duration: 1200,
//     delay: 300,
//     easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
// })

// /*=============== Update/AutoUpdate Year===============*/
// const startYear = 2025;
//   const currentYear = new Date().getFullYear();

//   document.getElementById("copyright").innerHTML =
//     `&copy; ${startYear}-${currentYear} Hasibul Hasan`;



// sr.reveal('.home--subtitle')
// sr.reveal('.home--title', {delay: 600})
// sr.reveal('.home--description', {delay: 900})
// sr.reveal('.home--box-1', {delay: 1200, rotate: {z: -20}})
// sr.reveal('.home--box-2', {delay: 1300, rotate: {z: -30}})
// sr.reveal('.home--box-3', {delay: 1400, rotate: {z: -40}})
// sr.reveal('.home--img', {delay: 1700, distance: '-60px'})
// sr.reveal('.home--circle', {delay: 2000, distance: '-100px'})
// sr.reveal('.about--title')
// sr.reveal('.about--description', {delay: 600})
// sr.reveal('.about--button', {delay: 900})
// sr.reveal('.work--swiper')
// sr.reveal('.services--card:nth-child(odd)', {interval: 200, origin: 'left', distance: '100px'})
// sr.reveal('.services--card:nth-child(even)', {interval: 200, origin: 'right', distance: '100px'})
// sr.reveal('.skills--description')
// sr.reveal('.skills--card', {delay: 600, interval: 200})
// sr.reveal('.skills--profession', {delay: 900})
// sr.reveal('.skills--list', {delay: 1200, interval: 200})
// sr.reveal('.testimonials--container')
// sr.reveal('.contact--form')
// sr.reveal('.contact--link', {delay: 600, interval: 200})
// sr.reveal('.footer--container')




/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('home-text')
if(homeText) {
   const letters = homeText.textContent.trim().split(''),
         angleStep = 360 / letters.length

   homeText.textContent = ''

   letters.forEach((char, i) => {
      const span = document.createElement('span')
      span.textContent = char
      span.style.transform = `rotate(${i * angleStep}deg)`
      homeText.appendChild(span)
   })
}

/*=============== HOME TYPED JS ===============*/
// নিশ্চিত করুন HTML-এ #home-typed এলিমেন্টটি আছে
if(document.getElementById('home-typed')) {
   new Typed('#home-typed', {
      strings: ['Software Developer', 'Web Developer','Freelancer','SEO Specialist'],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1300
,
      loop: true,
   })
}

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
   const header = document.getElementById('header')
   if(header) {
      window.scrollY >= 50 ? header.classList.add('scroll-header')
                           : header.classList.remove('scroll-header')
   }
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER WORK ===============*/ 
if(document.querySelector('.work--swiper')) {
   const swiperWork = new Swiper('.work--swiper', {
      loop: true,
      spaceBetween: 24,
      slidesPerView: 'auto',
      grabCursor: true,
      speed: 600,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
      }
   })
}

/*=============== SERVICES ACCORDION ===============*/ 
const servicesCards = document.querySelectorAll('.services--card'),
      servicesButtons = document.querySelectorAll('.services--button')

servicesButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentCard = button.closest('.services--card'),
              isOpen = currentCard.classList.contains('services-open')

        // সব কার্ড থেকে ওপেন ক্লাস বাদ দিয়ে ক্লোজ ক্লাস দেওয়া (নিরাপদ পদ্ধতি)
        servicesCards.forEach(card => {
            card.classList.remove('services-open')
            card.classList.add('services-close')
        })

        if(!isOpen){
            currentCard.classList.remove('services-close')
            currentCard.classList.add('services-open')
        }
    })
})

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 
const tracks = document.querySelectorAll('.testimonials--content')

tracks.forEach(track => {
    const cards = [...track.children]
    for (const card of cards) {
        track.appendChild(card.cloneNode(true))
    }
})

/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

if(contactForm) {
   const sendEmail = async (e) => {
      e.preventDefault()

      try {
         // নিশ্চিত করুন আপনার EmailJS স্ক্রিপ্টটি HTML-এ যুক্ত আছে
         await emailjs.sendForm('service_x85dreb','template_8dn2iz9','#contact-form','PLP1wfiMWk9azEfkG')
         contactMessage.textContent = 'Message sent successfully ✅'
         contactForm.reset()
      } catch (error) {
         contactMessage.textContent = 'Message not sent (service error) ❌'
      } finally {
         setTimeout(() => {
            contactMessage.textContent = ''
         }, 5000)
      }
   }
   contactForm.addEventListener('submit', sendEmail)
}

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUpButton = document.getElementById('scroll-up')
    if(scrollUpButton) {
       window.scrollY >= 350 ? scrollUpButton.classList.add('show-scroll')
                             : scrollUpButton.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.scrollY

    sections.forEach(section => {
        const id = section.id,
              top = section.offsetTop - 50,
              height = section.offsetHeight,
              // এখানে কোটেশন মার্ক দিয়ে কুয়েরি ফিক্স করা হয়েছে
              link = document.querySelector(`.nav__menu a[href*="${id}"]`)

        if(!link) return

        if(scrollY > top && scrollY <= top + height) {
            link.classList.add('active-link')
        } else {
            link.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== CUSTOM CURSOR ===============*/
const cursor = document.querySelector('.cursor')
if(cursor) {
   let mouseX = 0, mouseY = 0

   const cursorMove = () => {
       cursor.style.left = `${mouseX}px`
       cursor.style.top = `${mouseY}px`
       cursor.style.transform = 'translate(-50%, -50%)'
       requestAnimationFrame(cursorMove)
   }

   document.addEventListener('mousemove', (e) => {
       mouseX = e.clientX
       mouseY = e.clientY
   })

   cursorMove()

   const allLinks = document.querySelectorAll('a')
   allLinks.forEach(item => {
       item.addEventListener('mouseover', () => {
           cursor.classList.add('hide-cursor')
       })
       item.addEventListener('mouseleave', () => {
           cursor.classList.remove('hide-cursor')
       })
   })
}

/*=============== AUTO UPDATE YEAR ===============*/
const copyrightElement = document.getElementById("copyright");
if(copyrightElement) {
   const startYear = 2025;
   const currentYear = new Date().getFullYear();
   copyrightElement.innerHTML = `&copy; ${startYear}-${currentYear} Hasibul Hasan`;
}

/*=============== SCROLLREVEAL ANIMATION ===============*/
// নিশ্চিত করুন ScrollReveal লাইব্রেরিটি লোড হয়েছে
if(typeof ScrollReveal !== 'undefined') {
   const sr = ScrollReveal({
       origin: 'bottom',
       distance: '60px',
       duration: 1200,
       delay: 300,
       easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
   })

   sr.reveal('.home--subtitle')
   sr.reveal('.home--title', {delay: 600})
   sr.reveal('.home--description', {delay: 900})
   sr.reveal('.home--box-1', {delay: 1200, rotate: {z: -20}})
   sr.reveal('.home--box-2', {delay: 1300, rotate: {z: -30}})
   sr.reveal('.home--box-3', {delay: 1400, rotate: {z: -40}})
   sr.reveal('.home--img', {delay: 1700, distance: '-60px'})
   sr.reveal('.home--circle', {delay: 2000, distance: '-100px'})
   sr.reveal('.about--title')
   sr.reveal('.about--description', {delay: 600})
   sr.reveal('.about--button', {delay: 900})
   sr.reveal('.work--swiper')
   sr.reveal('.services--card:nth-child(odd)', {interval: 200, origin: 'left', distance: '100px'})
   sr.reveal('.services--card:nth-child(even)', {interval: 200, origin: 'right', distance: '100px'})
   sr.reveal('.skills--description')
   sr.reveal('.skills--card', {delay: 600, interval: 200})
   sr.reveal('.skills--profession', {delay: 900})
   sr.reveal('.skills--list', {delay: 1200, interval: 200})
   sr.reveal('.testimonials--container')
   sr.reveal('.contact--form')
   sr.reveal('.contact--link', {delay: 600, interval: 200})
   sr.reveal('.footer--container')
}











