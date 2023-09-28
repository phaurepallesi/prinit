# Print-It WebSite v.1

Créez un carrousel d'images interactif avec des flèches de navigation et des points indicateurs. L'utilisateur peut cliquer sur les flèches pour passer d'une diapositive à l'autre, et les points indicateurs reflètent la diapositive actuellement affichée.

1. Déclaration du tableau de diapositives (slides) : Le code commence par définir un tableau appelé slides. Chaque élément du tableau est un objet représentant une diapositive du carrousel. Chaque objet a deux propriétés : image (le chemin de l'image de la diapositive) et tagLine (une ligne de texte associée à la diapositive).

2. Gestion de la diapositive actuelle (currentSlide) : Une variable currentSlide est déclarée pour garder une trace de l'index de la diapositive actuellement affichée. Elle est initialisée à 0, ce qui signifie que la première diapositive sera affichée au chargement de la page.

3. Écouteurs d'événements pour les flèches (leftArrow et rightArrow) : Deux éléments HTML représentant les flèches gauche et droite du carrousel sont sélectionnés à l'aide de querySelector. Des écouteurs d'événements sont ajoutés à ces éléments pour détecter les clics de l'utilisateur. Lorsque l'utilisateur clique sur l'une des flèches, les fonctions onLeftArrowClick ou onRightArrowClick sont appelées pour changer la diapositive en conséquence.

4. Fonctions pour gérer le carrousel : Plusieurs fonctions sont définies pour gérer le carrousel. La fonction updateSlide met à jour l'image et le texte de la diapositive en fonction de la valeur de currentSlide. La fonction createDots crée les points indicateurs pour chaque diapositive. Les fonctions onLeftArrowClick et onRightArrowClick sont responsables du changement de la diapositive vers la gauche ou la droite en fonction du clic de l'utilisateur. Elles gèrent également les cas où l'utilisateur atteint la première ou la dernière diapositive en faisant une boucle.