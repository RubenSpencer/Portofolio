// ### LES CONDITONS ### --------------------------------------------------------------------------

/*
console.log("Conditons")

var favoriteColor = prompt("What's your favoite color?");
console.log("Your favorite color is : " + favoriteColor);

if(favoriteColor == "blue") {  // grace au == il vas comparer ce qu'il ya dans la variable favoriteColor et "blue"
    console.log("Espèce de macho boy");
}
else console.log("TU N'EST PAS UN MACHO BOY");

comparaison = favoriteColor == "blue";
console.log("C'est : " + comparaison);
*/
/*

 // ### LES OPERATEUR DES COMPARAISONS ### // --------------------------------------------------------------------------

var comparaison = 2 === "2"
console.log(comparaison);

//le triple égale comme ceci : === ,compare le type et la valeur des variables

var comparaison2 = 78 != 79;
console.log(comparaison2);

// le symbole ! permet de dire "différent de.." dans le cas ci présent on demande si 78 est différent de 79, oui donc il va me retourner true

var comparaison3 = 55 != 55;
console.log(comparaison3);

// !!!
var comparaison4 = 55 !== "55";
console.log(comparaison4);  // !== veut dire : est ce que 55 n'a pas la même valeur que 55 OU que le type de 55 n'est pas le même que le type de 55 
// !!! on ne fait pas que comparer la valeur mais aussi le type 

// > strictement supérieur 

var comparaison5 = 12 > 5;
console.log("12 est-il supérieur a 5 ? : " + comparaison5);

// < strictement inférieur 

var comparaison6 = 12 < 5;
console.log("Est ce que 12 est inférieur à 5 ? : " + comparaison6);

// >= et <= sup ou égal infer ou égal
var comparaison7 = 12 >= 12;
var comparaison8 = 15 <= 100;

console.log("Est ce que 12 est égal ou sup à 2 ? : " + comparaison7 + " Et est ce que 15 et inférieur ou égal à 100 ? " + comparaison8)

*/

/*

// ###### LES OPERATEUR LOGIQUES ###### --------------------------------------------------------------------------

// 
// && (AND)
//

var favoriteColor =  prompt("What's your favorite color ? ");
var tonAge = prompt("Waht's your age ? ");

if(favoriteColor === "blue" && tonAge > 20){ // pour faire & il faut faire alt + 038 
    console.log("Tu adore le " + favoriteColor + "et tu as " + tonAge)
} ;

//
// || (OR)
//

if(favoriteColor == "red" || tonAge == 20){
    console.log("One condition is at least true");
}
else console.log("Entre au moins un truc bon ma gueule ???");


// RULES    

// true + true => true 
// true + false => false 

*/

/*

  // ##### SWITCH CONDITION ##### --------------------------------------------------------------------------

var favoriteColor =  prompt("C'est quoi ta couleur favoris ?");
switch(favoriteColor){
    case "rose" :
        consoole.log("T'as couleur c'est rose");
        break;
    case "Jaune" : 
        console.log("T'as couleur c'est jaune");
        break;
    case "Marron" :
        conosole.log("T'as couelur c'est marron");
        break;
    default :
    console.log("bah frero je ne connais pas t'as couleur")
}

*/

//### LES LOOP ET ETERATION !! ### --------------------------------------------------------------------------

// Departure
// Condition
// Increment (Decrement)

// FOR

// for(var counter = 0; counter <= 10 ; counter ++){  // cela permettra d'éviter la répétition
//     console.log("Itération : " + counter);
// }

// EX

// document.write(" <ul> <li>1</li> <li>2</li> <li>3</li> <li>4</li> <li>5</li> </ul>") // ici on doit réecrire ) chaque un ul avec des li pour créer une liste

// var myList = "<ul>"

// for (var counter = 1 ; counter <= 5 ; counter ++){     // alors que là on peut directement créer de manière dynamique un tableau juste en modifiant la limite actuel qui est de  5
//     myList += "<li>" + counter + "</li>"
// };

// myList += "</ul>";

// document.write(myList);

///               ///
/// NESTED LOOPS ///
///             ///

/*
var myTable = "<table border='1'>";
var counter = 1;

for(var i = 1; i <= 10; i ++){
    myTable += "<tr>";

    for(var j = 1; j <= 5; j++){
        myTable += "<td>" + counter + "</td>"
        counter ++;
    }

    myTable += "</tr>";
}

myTable += "</table>";

document.write(myTable);

*/

//---------------------------------------------------------------------------------------------------------------------------------------

///                             ///
/// LES FONCTIONS UTILISATEURS ///
///                           ///

/*
console.log("User function");

function myFunction(){
    console.log("myFunction has been called");
    
}

myFunction(); // Appel de la fonction myFunction

function squareNumber(){
    return 2*2;
}

var result = squareNumber();
console.log("Résultat de la fonction squareNumber est : " + squareNumber());


//


function functionWithArgument(myNumber){
    return myNumber*myNumber;
}

var result2 = functionWithArgument(8);
console.log("le résultat de la fonction est num 2 est : " + result2);

var my0therFunction = function(myNumber){
    return myNumber * myNumber;
};

var result3 = my0therFunction(5);
console.log("Le résultat de cette fonction est : " + result3);

// Multiple Arguments

function calculMontantTTC(montantHT, tauxTVA){
   return montantHT * tauxTVA; //montant TTC
};

var montantTTC = calculMontantTTC(54, 1.5);
console.log("ceci vous coûtera : " + montantTTC);

// Les contantes

const TAUX_20 = 1.2;

console.log("ceci coute : " + calculMontantTTC(100,TAUX_20));

*/

/* 
console.log("Variable and function scope");  // scope = la porté

// GLOBAL 

myVariable = "my text"; // sans le mot clé "var" cette variable est GLOBAL
var myVariable2 = "my text 2" // cette variable est aussi GLOBAL car elle n'est dans aucune fonction 

// LOCAl signifie que la variable n'est disponible que dans une partie du code en général une fonction 

function myFunction(){
    var x = "This is a lacal variable";
    x += " ceci concacten du text à la variable 'x'"
}

var a = "GLOBAL"

function test(){
    var a = "LOCAL";
    console.log(a);
};

console.log(a);
test();

*/

/*

///        ///
/// ARRAY ///------------------------------------------------------------------------------------------------------------------------------------------------------
///      ///

var myArray = ["Paris", "New York", "Tanger", "Agadir"];

var my0therArray = ["Casablanca", 4, false, ["Bonjour", 5, true]];

console.log(myArray.length);
console.log(myArray[1]); //New York
console.log(my0therArray[2]); //affiche le booleen false

myArray.push("Londre");
console.log(myArray);

var list0fNames = ["Julien","Grady","Sean","Imad",4,5,6];


var listHTML = "<ul>";

for(var i = 0; i < list0fNames.length; i++){
   // console.log("Bonjours " + list0fNames[i]);
   listHTML += "<li>" + list0fNames[i] +"</li>"
};

listHTML += "</ul>";

document.write(listHTML);

*/

/*

// TRAINING HOUR

var lesbian = 11;

for (var i = 0; i <= lesbian; i++) {
    if(i < lesbian){
        console.log("you are " + i + " time gay");
    }
    if( i === 10){
        console.log("you're gay enough now :3 ");
    }
}

*/

/*

console.log("Multidimentional Arrzys");

// France 66.99
// Morocco 36.33
// Spain 46.94
// Panama 4.177

var multiArray = [
  ["France,", "New York", "Chine", "Espagne"],
  [66.99, 36.33, 46.94, 4.177],
];

console.log(multiArray);

console.log(multiArray[0][2]);
console.log(multiArray[1][3])


function addLiToUl(country, population){

    //ul selection
    var list = document.querySelector("ul")

    //li creation
    var li = document.createElement("li")

    //add some text to li
    li.appendChild(document.createTextNode(country + " : " + population));

    //add boostrap class
    li.classList.add("list-groupe-item");

    //append li to ul
    list.appendChild(li);

}

addLiToUl("France", 66.99)

for(var i = 0; i < multiArray[0].length; i++){
    console.log(i);
    addLiToUl(multiArray[0][i], multiArray[1][i]);
}

*/

// for (var i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/*

var n = prompt("Ok ma gueule entre un nombre aléatoire stp :")

n = parseInt(n)

var somme = 0;
var calcul = ""

for (var i = 0; i <= n; i++){
    somme += i;
    
    // Si c’est le dernier nombre, on n’ajoute pas le "+"
    if (i === n) {
        calcul += i;
    } else {
        calcul += i + " + ";
    }
};
console.log("La somme de 1 à " + n + " est :" + somme);
console.log(calcul + " = " + somme);

*/


