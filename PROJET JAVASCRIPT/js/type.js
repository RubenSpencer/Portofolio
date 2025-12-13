console.log("type et objet");

// string

var str = "my text"; // Object String

// property

console.log(str.length) // 7

// Method
console.log(str.toUpperCase()); //() j'ai mis ça car c'est une méthode 

// slice

console.log(str.slice(3, 7));

var myCut = str.slice(3, 7);

console.log(myCut);

// CONCATENATION 

console.log("Ceci est ma variable myCut : " + myCut);

////////       /////////
////////Number/////////
///////      /////////  

var nbr = 2;

console.log(typeof nbr);
console.log( typeof nbr.toString());

////////        /////////
////////Boolean/////////
///////       /////////  

var MyBoolean = true;
var MyBoolean2 = false;

////////        /////////
///////NULL  OR  UNDEFINED /////////
///////       /////////  

var myObjectNull = null;
var undefinedVariable;

console.log(undefinedVariable); // va renvoyer "undefined" car la variable n'a pas été définie ! 
console.log(myObjectNull);