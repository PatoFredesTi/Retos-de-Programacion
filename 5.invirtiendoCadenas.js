/*
Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje
que lo hagan de forma automatica.
'Si le pasamos "Hola mundo" nos retornaria "odnum aloH"'
*/

function invertirCadena(cadena){
    var cadenaInvertida = "";
    for(var i = cadena.length - 1; i >= 0; i--){
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}

console.log(invertirCadena("Hola mundo"));
console.log(invertirCadena("Anita lava la tina"));
console.log(invertirCadena("No me digas que no es verdad"));

