import { initialPageLoad } from './pageLoad';
import { generateMenuPage } from './menu';

// its initially loads the page stands on Home page
initialPageLoad();

//selects the Home btn
let homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', () => {
  let content = document.querySelector('#content');
  content.innerHTML = '';
  initialPageLoad();
});


//selects the menu btn

let menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  let content = document.querySelector('#content');
  content.innerHTML = '';
  generateMenuPage();
});