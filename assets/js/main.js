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
if(document.getElementById('home-typed')) {
   new Typed('#home-typed', {
      strings: ['Software Developer', 'Web Developer','Freelancer','SEO Specialist'],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1300,
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
const copyrightYear = document.getElementById("copyright-year");
if(copyrightYear) {
   copyrightYear.textContent = new Date().getFullYear();
}