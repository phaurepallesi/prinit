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
  let currentSlideIndex = 0; // Index de la diapositive actuelle, initialisé à 0
  
  // Sélection des éléments HTML
  
  

  // Fonction pour gérer le clic sur le bouton gauche
  function onLeftArrowClick() {
    // Décrémentez l'index de la diapositive actuelle
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlide();
  }
  
  // Fonction pour gérer le clic sur le bouton droit
  function onRightArrowClick() {
    // Incrémentez l'index de la diapositive actuelle
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlide();
  }
  
  // Fonction pour mettre à jour la diapositive
  function updateSlide() {
    const bannerImg = document.querySelector(".banner-img");
    const tagLine = document.querySelector("#banner p");
    const slide = slides[currentSlideIndex];
    bannerImg.src = `./assets/images/slideshow/${slide.image}`;
    tagLine.innerHTML = slide.tagLine;
  
    // Mettre à jour l'état des bullet points pour refléter la diapositive actuelle
    const dotsContainer = document.querySelector(".dots");
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("dot_selected", index === currentSlideIndex);
    });
  }
  
  // Fonction pour créer les bullet points
  function createDots() {
    const dotsContainer = document.querySelector(".dots");
    slides.forEach(() => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dotsContainer.appendChild(dot);
    });
  }
  
  
  
  // Ajouter les bullet points
  createDots();
  
  // Écouteurs d'événements pour les flèches
  const leftArrow = document.querySelector(".arrow_left");
  const rightArrow = document.querySelector(".arrow_right");
  
  leftArrow.addEventListener("click", onLeftArrowClick);
  rightArrow.addEventListener("click", onRightArrowClick);
  
  // Initialisation du carrousel avec la première diapositive
  updateSlide();
  