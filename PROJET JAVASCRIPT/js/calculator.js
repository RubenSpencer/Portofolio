const buttons = document.querySelectorAll("button")
const display = document.getElementById("display")

let expression = ""

buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.textContent;
  
      if (value === "C") {
        expression = "";
        display.value = "";
      } 
      else if (value === "DEL"){
        expression = expression.slice(0, expression.length -1);
        display.value = expression
    }
    else if (value === "←F"){
        expression = expression.slice(1)
        display.value = expression
    }
      else if (value === "=") {
        try {
          expression = eval(expression); // fait le calcul
          display.value = expression;
        } catch {
          display.value = "Erreur";
          expression = "";
        }
      } else {
        expression += value;
        display.value = expression;
      }
    });
  });
  
