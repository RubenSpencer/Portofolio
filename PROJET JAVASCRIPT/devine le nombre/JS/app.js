// 1 On génère un nombre aléatoire UNE fois au début
let nombreAleatoire = Math.floor(Math.random() * 10) + 1;
console.log("Nombre à deviner :", nombreAleatoire); // TEST

// 2 On récupère les éléments
let input = document.querySelector("#input");
let tentative = document.querySelector("#tentative");
let essaisRestants = 3; // nombre d'essais

// 3 Fonction appelée au clic du bouton
function essayer(event) {
    event.preventDefault();

    // Empêcher de jouer si plus d'essais
    if (essaisRestants <= 0) {
        alert("C'est fini ! Recharge la page pour recommencer.");
        return;
    }

    let valeur = parseInt(input.value);

    if (valeur === nombreAleatoire) {
        alert("Bravo CHAMPION !");
    } else {
        essaisRestants--;

        if (valeur > nombreAleatoire) {
            alert("Trop grand !");
        } else {
            alert("Trop petit !");
        }

        tentative.textContent = "Tentatives restantes : " + essaisRestants;

        if (essaisRestants === 0) {
            alert("Vous avez perdu ! Le nombre était " + nombreAleatoire);
        }
    }
}
