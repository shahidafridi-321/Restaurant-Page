import { createContentSections } from "./modules";
import { menuPageSetions, menuPageData } from './data';
import '../css/commomStyle.css';
import '../css/menu.css';


/////////////////////////////////////////////////MENU/////////////////////////////////////

function putContentInMenuPage(data) {
  let sections = document.querySelectorAll('.menu-section');
  sections.forEach((section, index) => {
    section.innerHTML = `<h2>${data[index].title}</h2>
    <div class="menu-item">
      <h3>${data[index].foods[0].name}</h3>
      <p>${data[index].foods[0].description}</p>
      <span>${data[index].foods[0].price}</span>
    </div>
    <div class="menu-item">
      <h3>${data[index].foods[1].name}</h3>
      <p>${data[index].foods[1].description}</p>
      <span>${data[index].foods[1].price}</span>
    </div>`;
  });
}

export function generateMenuPage() {
  createContentSections(menuPageSetions, 'content');
  putContentInMenuPage(menuPageData);
}

