import { initialPageLoad } from './pageLoad';
import { generateMenuPage } from './menu';

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
content.classList.toggle('home-page');
content.classList.remove('menu-page');
});


