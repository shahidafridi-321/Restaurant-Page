
// this funtion creates diffrent section in content container
export function createContentSections(contentsecArray, id) {
  let content = document.getElementById(id);
  contentsecArray.forEach(element => {
    let section = document.createElement('section');
    section.classList.add('menu-section');
    section.classList.add(element);
    content.appendChild(section);
  });
}

// this function puts content inside the welcome section of the content container for home page
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

