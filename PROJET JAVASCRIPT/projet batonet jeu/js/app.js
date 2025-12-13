const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");
const affichageBatonnet = document.getElementById("affichage-batonnets");

let batonnet = 20;
display.value = batonnet;

function afficherBatonnets() {
  affichageBatonnet.textContent = "| ".repeat(batonnet);
}

afficherBatonnets();

// Fonction : tour de l'ordinateur
function tourOrdi() {
  if (batonnet === 0) return; // Si déjà fini, rien à faire

  const choix = Math.floor(Math.random() * 3) + 1;
  batonnet -= choix;
  if (batonnet < 0) batonnet = 0;

  display.value = `L'ordi a pris ${choix}`;
  afficherBatonnets();

  if (batonnet === 0) {
    display.value = "L'ordinateur a perdu";
    buttons.forEach(btn => btn.disabled = true);
  } else {
    setTimeout(() => {
      display.value = batonnet;
    }, 1000); // Remet le nombre après 1 seconde
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = parseInt(button.textContent);
    batonnet -= value;
    if (batonnet < 0) batonnet = 0;

    display.value = batonnet;
    afficherBatonnets();

    if (batonnet === 0) {
      display.value = "Vous avez gagné !";
      buttons.forEach(btn => btn.disabled = true);
    } else {
      // Ordi joue après 1 seconde
      setTimeout(tourOrdi, 1000);
    }
  });
});
