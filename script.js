const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("nav a");

function updateActiveNav() {
  let current = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = rect.height;

    if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight >= window.innerHeight / 2) {
      current = section.getAttribute("id");
    }
  });

  navlinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

window.addEventListener("load", updateActiveNav);

/* -- */

const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');
const blurOverlay = document.getElementById('blurOverlay');
const navLinks = sideNav.querySelectorAll('a');

function closeNav() {
  menuBtn.classList.remove('open');
  sideNav.classList.remove('open');
  blurOverlay.classList.remove('active');
}

function openNav() {
  menuBtn.classList.add('open');
  sideNav.classList.add('open');
  blurOverlay.classList.add('active');
}

menuBtn.addEventListener('click', () => {
  if (sideNav.classList.contains('open')) {
    closeNav();
  } else {
    openNav();
  }
});

blurOverlay.addEventListener('click', () => {
  closeNav();
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeNav();
  });
});


/* -- */

function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setVH();
window.addEventListener('resize', setVH);

/* -- */

new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

/* -- */

document.getElementById("year").textContent = new Date().getFullYear();

/* -- */

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  root: null,      
  threshold: 0.5,    
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));



