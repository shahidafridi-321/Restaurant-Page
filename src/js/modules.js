
// this funtion creates diffrent section in content container
export function createContentSections(contentsecArray,id) {
  let content = document.getElementById(id);
  contentsecArray.forEach(element => {
    let section = document.createElement('section');
    section.classList.add('menu-section');
    section.classList.add(element);
    content.appendChild(section);
  });
}

// this function puts content inside the welcome section of the content container
export function putsContentInWelcomeSection() {
  let welcomeSection = document.querySelector('.welcome-section');

  let title = document.createElement('h1');
  title.textContent = 'Welcome to Gourmet Delighted';

  let paragraph = document.createElement('p');
  paragraph.textContent = `Your culnary journey begins here!`;

  welcomeSection.appendChild(title);
  welcomeSection.appendChild(paragraph);
}

// this function puts content inside the description section of the content container
export function putsContentDescriptionSection() {
  let descriptionSection = document.querySelector('.description-section');
  descriptionSection.innerHTML = `<h2>We Love To Serve You...</h2><h3>Bless us with a chance</h3>
      <p>At Gourmet Delighted, we offer an unforgettable dinning experience,combining exquisite cuisine, exceptional service, and a warm, inviting atmosphere. Our chefs usethe finest ingredients to create dishes that will tantalize your taste buds and leave you craving for more.
      </p>`;
}



// this function creates cards that has an image ,a title and description
export function createCards(data) {
  let cardsSection = document.querySelector('.cards-section');
  data.forEach(element => {
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card');
    let img = new Image();
    img.src = element.image;

    let title = document.createElement('h3');
    title.textContent = element.title;

    let description = document.createElement('p');
    description.textContent = element.description;

    cardContainer.appendChild(img);
    cardContainer.appendChild(title);
    cardContainer.appendChild(description);
    cardsSection.appendChild(cardContainer);

  });
}


/////////////////////////////////////////////////MENU/////////////////////////////////////

export function putContentInAppetizersSection(){
  let appetizers = document.querySelector('.appetizers');
  appetizers.innerHTML =`<h2>Appetizers</h2>
      <div class="menu-item">
        <h3>Bruschetta</h3>
        <p>Grilled bread topped with a mixture of fresh tomatoes, garlic, basil, and olive oil.</p>
        <span>$8.99</span>
      </div>
      <div class="menu-item">
        <h3>Stuffed Mushrooms</h3>
        <p>Mushrooms filled with a blend of cheeses, herbs, and breadcrumbs, baked to perfection.</p>
        <span>$9.99</span>
      </div>`;
};

export function putContentInMainCursesSection(){
  let mainCourses = document.querySelector('.main-courses');
  mainCourses.innerHTML = `<h2>Main Courses</h2>
      <div class="menu-item">
        <h3>Grilled Salmon</h3>
        <p>Fresh salmon fillet grilled and served with a lemon-dill sauce and seasonal vegetables.</p>
        <span>$18.99</span>
      </div>
      <div class="menu-item">
        <h3>Ribeye Steak</h3>
        <p>Juicy ribeye steak cooked to your liking, served with garlic mashed potatoes and steamed broccoli.</p>
        <span>$24.99</span>
      </div>`;
}
export function putContentInDessertsSection(){
  let desserts = document.querySelector('.desserts');
  desserts.innerHTML = `<h2>Desserts</h2>
      <div class="menu-item">
        <h3>Chocolate Lava Cake</h3>
        <p>Rich chocolate cake with a molten chocolate center, served with vanilla ice cream.</p>
        <span>$7.99</span>
      </div>
      <div class="menu-item">
        <h3>Cheesecake</h3>
        <p>Creamy cheesecake with a graham cracker crust, topped with a strawberry glaze.</p>
        <span>$6.99</span>
      </div>`;
}
export function putContentInBeveragesSection(){
  let beverages = document.querySelector('.beverages');
  beverages.innerHTML = `<h2>Beverages</h2>
      <div class="menu-item">
        <h3>Fresh Lemonade</h3>
        <p>Refreshing lemonade made with freshly squeezed lemons and a hint of mint.</p>
        <span>$3.99</span>
      </div>
      <div class="menu-item">
        <h3>Espresso</h3>
        <p>Rich and smooth espresso, made from premium coffee beans.</p>
        <span>$2.99</span>
      </div>`;
}




/////////////////////////////ABOUT PAGE //////////////////////

export function putContentInAboutSection(){
  let aboutSection = document.querySelector('.about-section');
  aboutSection.innerHTML = `<h1>About Gourmet Delighted</h1>
      <p>Welcome to Gourmet Delighted, where culinary artistry meets exceptional hospitality. Our restaurant is dedicated to providing a dining experience that delights all your senses.</p>
`;
}

export function putContentInMissionSection(){
  let missionSection = document.querySelector('.mission-section');
  missionSection.innerHTML = `<h2>Our Mission</h2>
      <p>At Gourmet Delighted, our mission is to offer exquisite cuisine, exceptional service, and a warm, inviting atmosphere. We strive to create memorable dining experiences that bring joy to our guests.</p>
    `;
 
}

export function putContentInHistorySection(){
  let historySection = document.querySelector('.history-section');
  historySection.innerHTML = `<h2>Our History</h2>
      <p>Founded in 2024, Gourmet Delighted has quickly become a favorite dining destination in the heart of the city. Our journey began with a passion for culinary excellence and a commitment to using the finest ingredients.</p>
    `;
}

import ceo from '../images/ceo.jpg';
import manager from '../images/manager.jpg';
export function putContentInTeamSection(){
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