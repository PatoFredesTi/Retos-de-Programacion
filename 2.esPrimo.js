/*
    * Enunciado: Se debe crear un programa que se encargue de comprobar si un numero es primo o no.
    * Luego imprime por consola los numeros primos entre 1 y 100.
*/

//Function para discriminar si un numero es primo o no 
function esPrimo(numero){
    if(numero < 2){
        return false;
    }
    for(let i = 2; i < numero; i++){
        if(numero % i === 0){
            return false;
        }
    }
    return true;

}

//Function que muestra los numeros diferenciando entre primo o no primo.
function mostrar(numero){
    resultado = [];
    for(let i =2; i < numero; i++){
        if(esPrimo(i)){
            resultado.push("El numero: " + i + " Es primo")
        }else{
            resultado.push("El numero: " + i + " No es primo")
        }
    }
    return resultado;
}

console.log(mostrar(100));
