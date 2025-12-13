let btn = document.querySelectorAll('.container button'); // seulement les boutons dans .container

let input = document.querySelector('input');

btn.forEach(function(button) {
    button.addEventListener("click", function() {
        if (this.textContent === "=") {
            input.value = eval(input.value);
        } else if (this.textContent === "C") {
            input.value = "";
        } else {
            input.value += this.textContent;
        }
    });
});

