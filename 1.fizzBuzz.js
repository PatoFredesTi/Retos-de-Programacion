/*
    * Enunciado: Se debe crear un programa que muestre por consola los numeros de 1 a 100 (Ambos incluidos)
    * sustituyendo los siguientes numeros:
    * - Multiplos de 3 por 'fizz'.
    * - Multiplos de 5 por 'buzz'.
    * - Multiplos de 3 y de 5 a la vez por 'FIZZBUZZ'
*/
for (let i = 1; i < 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FIZZBUZZ`)
    }else if(i % 3 === 0) {
        console.log(`${i} fizz`)
    }else if (i % 5 === 0){
        console.log(`${i} buzz`)
    }
}
