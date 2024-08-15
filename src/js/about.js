import '../css/commomStyle.css';
import '../css/about.css';

import { aboutSections, aboutSectionsData } from './data';
import { createContentSections } from './modules';


/////////////////////////////ABOUT PAGE //////////////////////
// let teamdata = 
function createContentInAboutPage(data) {
  let sections = document.querySelectorAll('.menu-section');
  let teamIndex = 0;

  sections.forEach((section, index) => {
    if (!section.classList.contains('team-section')) {
      section.innerHTML = `<h2>${data[index].title}</h2>
      <p>${data[index].description}</p> 
      `;
    } else {
      data[index].forEach((item,i) =>{
        let div = document.createElement('div');
        div.classList.add('team-card');
        div.innerHTML = `
      <img src="${data[index][i].image}" alt="Chef">
      <h3>${data[index][i].title}</h3>
      <p>${data[index][i].description}</p>
    `;
      section.append(div);
      });
    }
  });
};



export function generateAboutPage() {
  createContentSections(aboutSections, 'content');
  createContentInAboutPage(aboutSectionsData);
}


