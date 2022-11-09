/*  
Escribe una funcion que calcule si un numero dado es un numero de Armstrong (tambien llamado numero narcisista)
*/

function esNumeroAmstrong(numero){
    var numeroString = numero.toString();
    var numeroDigitos = numeroString.length;
    var suma = 0;
    for(var i = 0; i < numeroDigitos; i++){
        var digito = numeroString.charAt(i);
        suma += Math.pow(digito, numeroDigitos);
    }
    return suma == numero;
}

console.log(esNumeroAmstrong(153));
console.log(esNumeroAmstrong(370));
console.log(esNumeroAmstrong(371));
console.log(esNumeroAmstrong(407));
console.log(esNumeroAmstrong(1634));
console.log(esNumeroAmstrong(8208));
console.log(esNumeroAmstrong(9474));
console.log(esNumeroAmstrong(54748));

