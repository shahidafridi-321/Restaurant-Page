import '../css/commomStyle.css';
import '../css/about.css';

import { aboutSections, aboutSectionsData } from './data';
import { createContentSections } from './modules';


/////////////////////////////ABOUT PAGE //////////////////////

function createContentInAboutPage(data) {
  let sections = document.querySelectorAll('.menu-section');

  sections.forEach((section, index) => {
    if (!section.classList.contains('team-section')) {
      section.innerHTML = `<h2>${data[index].title}</h2>
      <p>${data[index].description}</p> 
      `;
    }
  });
};

import ceo from '../images/ceo.jpg';
import manager from '../images/manager.jpg';
function putContentInTeamSection() {
  let teamSection = document.querySelector('.team-section');
  teamSection.innerHTML = `<div class="team-card">
        <img src="${ceo}" alt="Chef">
        <h3>Karolina Kaboomp</h3>
        <p>With over 20 years of experience, Chef Karolina Kaboomp brings creativity and expertise to our kitchen, crafting dishes that are both innovative and delicious.</p>
      </div>
      <div class="team-card">
        <img src="${manager}" alt="Manager">
        <h3>Edmond Dantès</h3>
        <p>Our manager, Edmond Dantès, ensures that every guest enjoys a seamless and memorable dining experience with her impeccable attention to detail.</p>
      </div>`;
}


export function generateAboutPage() {
  createContentSections(aboutSections, 'content');
  createContentInAboutPage(aboutSectionsData);
  putContentInTeamSection();
}


