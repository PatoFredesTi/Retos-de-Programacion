//Crea un bucle 'for' que imprime los números de 1 al 100. Para los múltiplos de 3 imprime la palabra "Fizz" en vez del número 
//y para los múltiplos de 5 imprime "Buzz". Para los números que son múltiplos de 3 y de 5, imprime “FizzBuzz”.

for (let i = 1; i < 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FIZZBUZZ`)
    }else if(i % 3 === 0) {
        console.log(`${i} fizz`)
    }else if (i % 5 === 0){
        console.log(`${i} buzz`)
    }
}
