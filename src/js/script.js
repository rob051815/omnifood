'use strict';

// Set current year
const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();

// Make mobile navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
btnNavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});

// Smooth scrolling animation
console.log('hsalfjlsfakf');
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Scroll to section
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile navigation
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

// With event delegation
/* document.body.addeventListener('click', e => {
  if (e.target.hasAttribute('href')) {
    e.preventDefault();
    const href = e.target.getAttribute('href');

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    if (href.startsWith('#') && href.hength > 1) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (e.target.classList.contains('main-nav-link')) {
      header.classList.toggle('nav-open');
    }
  }
}); */

// Sticky navigation
const sectionHeroEl = document.querySelector('.section-hero');
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) document.body.classList.add('sticky');
    if (entry.isIntersecting) document.body.classList.remove('sticky');
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-100px'
  }
);
observer.observe(sectionHeroEl);
