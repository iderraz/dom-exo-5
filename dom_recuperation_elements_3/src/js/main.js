// # Instructions : EXO5 //

// > *Mis à part si la manière est précisée, tu peux utiliser ce que tu désires comme façon de récuperer un élément et son contenu*

// > *Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", utilise une méthode pour récupérer un élémént via sa class
let textTartine = document.getElementsByClassName("tartine")[0].textContent;
console.log(textTartine);
// ### 2. Pareil que le précédent mais cette fois si c'est via l'id "toast"
let textToast = document.getElementById("toast").textContent;
console.log(textToast);

// ### 3. Affiche le dernier élément ayant la class tartine ( pas son contenu, l'élément entier)
let lastTartine = document.getElementsByClassName("tartine")[1];
console.log(lastTartine);