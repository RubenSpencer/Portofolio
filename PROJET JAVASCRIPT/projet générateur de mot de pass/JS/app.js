const c = "azertyuiopqsdfghjklmwxcvbn";   // minuscules
const d = "AZERTYUIOPQSDFGHJKLMWXCVBN";   // majuscules
const a = "1234567890";                   // chiffres
const b = "!*$?;:,";                      // spéciaux

const tous = c + d + a + b;

// Fonction pour mélanger une chaîne (shuffle)
function shuffle(str) {
    let arr = str.split("");
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
}

function generatePassword(event){
    event.preventDefault();
    let input = document.querySelector("#myPass");
    let motDePasse = "";

    // Longueur aléatoire entre 8 et 16
    const longueur = Math.floor(Math.random() * (16 - 8 + 1)) + 8;

    // Forcer au moins 1 caractère de chaque catégorie
    motDePasse += c[Math.floor(Math.random() * c.length)];
    motDePasse += d[Math.floor(Math.random() * d.length)];
    motDePasse += a[Math.floor(Math.random() * a.length)];
    motDePasse += b[Math.floor(Math.random() * b.length)];

    // Compléter avec des caractères aléatoires
    for(let i = 4; i < longueur; i++){
        const indexC = Math.floor(Math.random() * tous.length);
        motDePasse += tous[indexC];
    }

    // Mélanger le mot de passe pour éviter un ordre prévisible
    motDePasse = shuffle(motDePasse);

    // Afficher
    input.value = motDePasse;
}

function voir(){
    let input = document.querySelector("#myPass");
    let state = document.querySelector("#state")
    if(input.getAttribute("type") == "password"){
        input.setAttribute("type", "text")
        state.innerHTML = "Cacher"
    }
    else {
        input.setAttribute("type", "password")
        state.innerHTML = "Voir"
    }
}
