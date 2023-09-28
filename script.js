// Déclaration du tableau de diapositives
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Déclaration des variables
let currentSlide = 0; // Index de la diapositive actuelle, initialisé à 0

// Sélection des éléments HTML
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
const dots = dotsContainer.querySelectorAll(".dot");

// Écouteurs d'événements pour les flèches
leftArrow.addEventListener("click", onLeftArrowClick);
rightArrow.addEventListener("click", onRightArrowClick);

// Appel des fonctions pour initialiser le carroussel
updateSlide();
createDots();

// Fonction pour gérer le clic sur le bouton gauche
function onLeftArrowClick() {
  // Décrémentez l'index de la diapositive actuelle
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  updateSlide();
}

// Fonction pour gérer le clic sur le bouton droit
function onRightArrowClick() {
  // Incrémentez l'index de la diapositive actuelle
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  updateSlide();
}

// Fonction pour créer les bullet points
function createDots() {
  slides.forEach(() => {
    const dot = document.createElement("div");
    dot.className = "dot"; // Utilisation de className pour définir la classe
    dotsContainer.appendChild(dot);
  });
}

// Fonction pour mettre à jour la diapositive
function updateSlide() {
  const slide = slides[currentSlide];
  bannerImg.src = `./assets/images/slideshow/${slide.image}`;
  tagLine.innerHTML = slide.tagLine;

  // Mettre à jour l'état des bullet points pour refléter la diapositive actuelle
  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.className = "dot";
    dots[currentSlide].className = "dot dot_selected";
  });
  
}





