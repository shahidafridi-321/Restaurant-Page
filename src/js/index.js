import { initialPageLoad } from './pageLoad';
import { generateMenuPage } from './menu';
import { generateAboutPage } from './about';

// its initially loads the page stands on Home page
initialPageLoad();
let content = document.querySelector('#content');
content.classList.add('home-page');

//selects the Home btn
let homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', () => {
  let content = document.querySelector('#content');
  content.innerHTML = '';
  initialPageLoad();
  content.classList.remove('menu-page');
  content.classList.remove('about-page');
  content.classList.add('home-page');
});

// selects the Menu btn
let menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  let content = document.querySelector('#content');
  content.innerHTML = '';
  generateMenuPage();
  content.classList.add('menu-page');
  content.classList.remove('home-page');
  content.classList.remove('about-page');
});


// selects the about page 
let aboutBtn = document.querySelector('.about-btn');
aboutBtn.addEventListener('click', () => {
  let content = document.querySelector('#content');
  content.innerHTML = '';
  generateAboutPage();
  content.classList.add('about-page');
  content.classList.remove('menu-page');
  content.classList.remove('home-page');
  
});