import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Marko',
  subtitle: "and welcome to my portfolio site ✌",
  
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I recently graduated and obtained Master's degree in electronics and computer engineering at Faculty of Electrical engineering, Mechanical engineering and Naval Architecture in Split, Croatia. I am fluent in English and have basic knowledge of German. My main goal is to enter the software development industry as a junior.",
  paragraphTwo: "I am a JavaScript developer with a good knowledge of ES6, SASS, CSS and ReactJS. Most recently I've been working with React and developed a couple of interesting project to showcase below.",
  paragraphThree: "I'm extremely eager to work and learn and I would be really excited to work in an environment that would push me in a full-stack direction. I also have experience with using C, C++, SQL, noSQL, GraphQL and GatsbyJS. You can see my recent projects below.",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Clothing web-shop',
    info: "Full e-commerce solution with React and Redux as a state management system. Also used React Router and Firebase. You can register and login(also with Google), explore webshop, add to cart, remove from cart and ultimately pay with card (not really but Stripe provided a demo card 😊). ",
    info2: 'I posted a youtube demo as a live version.',
    url: 'https://www.youtube.com/watch?v=zyHHvJJiD1w&feature=youtu.be',
    repo: 'https://github.com/maverickcro/ClothingWebshop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'ToDooo List',
    info: "An all-around practical ToDo app. You can add todo's, remove them or edit them. You can also click on the finished todo instead of removing it for that extra satisfaction. 😉 ",
    info2: "Note: I'll look into session storage and implement it so todos stay when I reload the page.",
    url: 'https://maverickcro.github.io/ToDoooList/',
    repo: 'https://github.com/maverickcro/ToDoooList', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Vanilla JS and CSS animation',
    info: 'As I wanted to showcase my Javascript skills I created a website where I will be putting small Javascript projects.',
    info2: 'Every component-like project is presented with a card where you can check live demo. I will make sure I constantly add more mini-projects for practice, these css animations are cool.',
    url: 'https://maverickcro.github.io/projects-showcase/',
    repo: 'https://github.com/maverickcro/projects-showcase', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "You have a question for me? Feel free to contact me. Looking forward to your e-mail! 😊",
  btn: 'Click here',
  email: 'mstjep00@fesb.hr',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/maverickcro_',
    },
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/marko-stjepanovic-163574151/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/maverickcro',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
