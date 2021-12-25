
const projects = [
  {
    title: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    techs: ["css", "html", "Bootstrap", "Ruby"],
    featuredImage: "assets/images/multi-post.svg",
    featuredPopupImage: "assets/images/multi-post.svg",
    liveVersionon: "https://gegardus.github.io/My-Portfolio/",
    sourceLink: "https://github.com/Gegardus/Desktop-Version/tree/desktop",
    class: "background",
    btnImg1: 'assets/images/seelive.svg',
    btnImg2: 'assets/images/seeSrc.png',
  },
  {
    title: "Profesional Art Printing Data",
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    techs: ["html", "Bootstrap", "Ruby"],
    featuredImage: "assets/images/ImgI.svg",
    featuredPopupImage: "assets/images/popDesk.png",
    liveVersion: "https://gegardus.github.io/My-Portfolio/",
    sourceLink: "https://github.com/Gegardus/Desktop-Version/tree/desktop",
    class: "work1",
    btnImg1: 'assets/images/seelive.svg',
    btnImg2: 'assets/images/seeSrc.png',
  },
  {
    title: "Data Dashboard Healthcare",
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    techs: ["html", "Bootstrap", "Ruby"],
    featuredImage: "assets/images/ImgII.svg",
    featuredPopupImage: "assets/images/popDesk.png",
    liveVersion: "https://gegardus.github.io/My-Portfolio/",
    sourceLink: "https://github.com/Gegardus/Desktop-Version/tree/desktop",
    class: "work2",
    btnImg1: 'assets/images/seelive.svg',
    btnImg2: 'assets/images/seeSrc.png',
  },
  {
    title: "Website Protfolio",
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    techs: ["html", "Bootstrap", "Ruby"],
    featuredImage: "assets/images/ImgIII.svg",
    featuredPopupImage: "assets/images/popDesk.png",
    liveVersion: "https://gegardus.github.io/My-Portfolio/",
    sourceLink: "https://github.com/Gegardus/Desktop-Version/tree/desktop",
    class: "work3",
    btnImg1: 'assets/images/seelive.svg',
    btnImg2: 'assets/images/seeSrc.png',
  },
  {
    title: "Profesional Art Printing Data",
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    techs: ["html", "Bootstrap", "Ruby"],
    featuredImage: "assets/images/ImgIV.svg",
    featuredPopupImage: "assets/images/popDesk.png",
    liveVersion: "https://gegardus.github.io/My-Portfolio/",
    sourceLink: "https://github.com/Gegardus/Desktop-Version/tree/desktop",
    class: "work4",
    btnImg1: 'images/btn-img-pu1.png',
    btnImg1: 'assets/images/seelive.svg',
    btnImg2: 'assets/images/seeSrc.png',
  },
  {
    title: "Data Dashboard Healthcare",
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    techs: ["html", "Bootstrap", "Ruby"],
    featuredImage: "assets/images/ImgII.svg",
    featuredPopupImage: "assets/images/popDesk.png",
    liveVersion: "https://gegardus.github.io/My-Portfolio/",
    sourceLink: "https://github.com/Gegardus/Desktop-Version/tree/desktop",
    class: "work5",
    btnImg1: 'assets/images/seelive.svg',
    btnImg2: 'assets/images/seeSrc.png',
  },
  {
    title: "Website Protfolio",
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    techs: ["html", "Bootstrap", "Ruby"],
    featuredImage: "assets/images/ImgIII.svg",
    featuredPopupImage: "assets/images/popDesk.png",
    liveVersion: "https://gegardus.github.io/My-Portfolio/",
    sourceLink: "https://github.com/Gegardus/Desktop-Version/tree/desktop",
    className: "work6",
    btnImg1: 'assets/images/seelive.svg',
    btnImg2: 'assets/images/seeSrc.png',
  },
];

const mediaQuery = window.matchMedia('( min-width: 992px )');

if (mediaQuery.matches) {

const buttonOne = document.querySelector(".bn-button");
const buttonTwo = document.querySelector(".pr-button");
}
function close() {
  const container = document.querySelector(".popup-container");
  container.style.display = "none";
}

function open(index) {
  const {
    title,
    description,
    techs,
    featuredImage,
    featuredPopupImage,
    liveVersion,
    sourceLink,
    className,
    btnImg1,
    btnImg2,
  } = projects[index];

  const tech1 = techs[0];
  const tech2 = techs[1];
  const tech3 = techs[2];
  const tech4 = techs[3];

  const container = document.querySelector(".popup-container");
  container.innerHTML = `
  <div class="main-pu-container">
  <div class="content-container">

  <div class="heading-btn">
  <h1 class="project-title-pu">${title}</h1>
  <button type="button" class="close-btn-pu">X</button>
  </div>

  <ul class="devs-pu">
  <li class="dev-pu2">${tech1}</li>
  <li class="dev-pu2">${tech2}</li>
  <li class="dev-pu2">${tech3}</li>
  <li class="dev-pu2">${tech4}</li>
  </ul>

  <div class="img-container-pu">
  <img src=${featuredImage} alt"project-image-pu" class="project-img-pu">
  </div>

  <div class="conatiner-pc-pu">
  <p class="project-info-pu">${description}</p>
    
  <div class="btn-container-pu">
  <button type="button" class="btn-pu">${liveVersion}<img class="btn-img-pu" src=${btnImg1}></button>
  <button type="button" class="btn-pu t">${sourceLink}<img class="btn-img-pu" src=${btnImg2}></button>
  </div>
  </div>

  </div>
  </div>
  </div>
`;

  
  container.style.display = "block";
  const buttonClose = document.querySelector(".close-btn-pu");
  buttonClose.addEventListener("click", close);
}

buttonOne.addEventListener('click', () => {
    open(0);
  });
  buttonTwo.addEventListener('click', () => {
    open(1);
  });