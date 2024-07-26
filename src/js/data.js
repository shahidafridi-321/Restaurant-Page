
import signatureDishes from '../images/signature-dishes.jpg';
import scozyArea from '../images/cozy.jpg';
import service from '../images/service.jpg';

export let cardsData = [
  {
    image: `${signatureDishes}`,
    title: 'Our Signature Dishes',
    description: 'Experience a vareity of flavors with our signature dishes, meticulously crafted to perfection.',
  },
  {
    image: `${scozyArea}`,
    title: 'Cozy Ambiance',
    description: 'Relax in our cozy and elegant dining area, designed to provide a comfortable and enjoyable experience.',
  },
  {
    image: `${service }`,
    title: 'Exceptional Service',
    description: 'Our friendly and attentive staff are here to ensure that your dining experience is nothing short of exceptional.',
  }
];

export let contentSections = ['welcome-section','description-section','cards-section'];

export let menuPageSetions = ['appetizers','main-courses','desserts','beverages'];

export let menuPageData = [
  {
    title:'Appetizers',
    foods:[
      {
        name:'Bruschetta',
        description:'Grilled bread topped with a mixture of fresh tomatoes, garlic, basil, and olive oil.',
        price:'$8.99'
      },
      {
        name:'Stuffed Mushrooms',
        description:'Mushrooms filled with a blend of cheeses, herbs, and breadcrumbs, baked to perfection.',
        price:'$9.99'
      },
    ],
  },
  {
    title:'Main Courses',
    foods:[
      {
        name:'Grilled Salmon',
        description:'Fresh salmon fillet grilled and served with a lemon-dill sauce and seasonal vegetables.',
        price:'$18.99'
      },
      {
        name:'Ribeye Steak',
        description:'Juicy ribeye steak cooked to your liking, served with garlic mashed potatoes and steamed broccoli.',
        price:'$24.99'
      },
    ],
  },
  {
    title:'Desserts',
    foods:[
      {
        name:'Chocolate Lava Cake',
        description:'Rich chocolate cake with a molten chocolate center, served with vanilla ice cream.',
        price:'$7.99'
      },
      {
        name:'CheeseCake',
        description:'Creamy cheesecake with a graham cracker crust, topped with a strawberry glaze.',
        price:'$6.99'
      },
    ],
  },
  {
    title:'Beverages',
    foods:[
      {
        name:'Fresh Lemonade',
        description:'Refreshing lemonade made with freshly squeezed lemons and a hint of mint.',
        price:'$3.99'
      },
      {
        name:'Espresso',
        description:'Rich and smooth espresso, made from premium coffee beans.',
        price:'$2.99'
      },
    ],
  },
];

export let aboutSections = ['about-section','mission-section','history-section','team-section'];
export let aboutSectionsData = [
  {
    title:'About Gourmet Delighted',
    description:'Welcome to Gourmet Delighted, where culinary artistry meets exceptional hospitality. Our restaurant is dedicated to providing a dining experience that delights all your senses.'
  },
  {
    title:'Our Mission',
    description:'At Gourmet Delighted, our mission is to offer exquisite cuisine, exceptional service, and a warm, inviting atmosphere. We strive to create memorable dining experiences that bring joy to our guests.'
  },
  {
    title:'Our History',
    description:'Founded in 2024, Gourmet Delighted has quickly become a favorite dining destination in the heart of the city. Our journey began with a passion for culinary excellence and a commitment to using the finest ingredients.'
  },
];