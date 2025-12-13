const buttons = document.querySelectorAll("button")
const display = document.getElementById("display")

let champ = ""

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        const value = button.textContent

        if (value === "C"){
            champ = "";
            display.value = "";
        }
        // else if (value = "DEL"){
        //     champ = champ.slice(0, champ.length, -1)
        //     display.value = champ
        // }
        else if (value === "="){
            try {
            champ = eval(champ);
            display.value = champ
            }catch {
                display.value = "Error";
                champ = "";
            }
        }
        




        else {
            champ += value
        display.value = champ
        }
    })
});