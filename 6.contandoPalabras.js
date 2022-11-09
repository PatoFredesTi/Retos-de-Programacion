/*  
Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas
Los signos de puntuacion no forman parte de la palabra
Una palabra es la misma aunque aparezca en mayusculas o minusculas
No se pueden utilizar funciones propias del lenguaje que lo resuelvan automaticamente
*/

function contarPalabras(texto){
    var textoSinSignos = texto.replace(/[^a-zA-Z0-9 ]/g, "");                                
    var textoMinusculas = textoSinSignos.toLowerCase();
    var palabras = textoMinusculas.split(" ");
    var recuento = {};
    for(var i = 0; i < palabras.length; i++){
        if(recuento[palabras[i]]){
            recuento[palabras[i]]++;
        }else{
            recuento[palabras[i]] = 1;
        }
    }
    return recuento;
}

console.log(contarPalabras("Hola mundo, hola mundo, hola mundo"));
console.log(contarPalabras("Anita lava la tina, Anita lava la tina, Anita lava la tina"));
console.log(contarPalabras("No me digas que no es verdad, No me digas que no es verdad, No me digas que no es verdad"));


