// Créer une fonction qui génère un nombre aléatoire
// Retourne le nombre aléatoire

const lancerDe = () => {
  const resultat = document.getElementById("resultat");
  const imageDe = document.getElementById("imageDe");

  const nombre = Math.floor(Math.random() * 6) + 1;

  resultat.textContent = "Le nombre est : " + nombre;
  imageDe.src = `image/de${nombre}.png`; // même dossier que dans ton HTML
};

document.querySelector("button").addEventListener("click", lancerDe);

// Afficher le nombre
