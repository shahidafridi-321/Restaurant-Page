import { createContentSections,putContentInAppetizersSection,putContentInMainCursesSection,putContentInDessertsSection,putContentInBeveragesSection} from "./modules";
import {menuPageData,menuPageSetions}  from './data';
import '../css/commomStyle.css';
import '../css/menu.css';


export function generateMenuPage(){
  createContentSections(menuPageSetions,'content');
  putContentInAppetizersSection();
  putContentInMainCursesSection();
  putContentInDessertsSection();
  putContentInBeveragesSection();
}


//selects the menu btn

let menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  let content = document.querySelector('#content');
  content.innerHTML = '';
  generateMenuPage();
  content.classList.add('menu-page');
  content.classList.remove('home-page');
});
