/*
Crea una funcion que ordene y retorne una matriz de numeros.
La funcion recibira un listado (por ejemplo [2,4,6,8,9]) y un parametro adicional
"Asc" y "Desc" para indicar si debe ordenarse de menor a mayor o de mayor a menor.
No se pueden utilizar funciones propias del lenguaje que lo resuelvan automaticamente
*/

function ordenaLaLista(lista, orden){
    var listaOrdenada = [];
    if(orden == "Asc"){
        for(var i = 0; i < lista.length; i++){
            if(lista[i] < lista[i+1]){
                listaOrdenada.push(lista[i]);
            }else{
                listaOrdenada.push(lista[i+1]);
            }
        }
    }else if(orden == "Desc"){
        for(var i = 0; i < lista.length; i++){
            if(lista[i] > lista[i+1]){
                listaOrdenada.push(lista[i]);
            }else{
                listaOrdenada.push(lista[i+1]);
            }
        }
    }
    return listaOrdenada;
}

console.log(ordenaLaLista([2,4,6,8,9], "Asc"));
console.log(ordenaLaLista([2,4,6,8,9], "Desc"));
console.log(ordenaLaLista([9,8,6,4,2], "Asc"));
console.log(ordenaLaLista([9,8,6,4,2], "Desc"));