/*
Crea una funcion que imprima los 30 proximos años bisiestos siguientes a uno dado.
Utiliza el menor numero de lineas para resolver el ejercicio
*/ 

function anioBisiestos(anio){
    var anioBisiesto = anio;
    var contador = 0;
    while(contador < 30){
        if(anioBisiesto % 4 == 0 && anioBisiesto % 100 != 0 || anioBisiesto % 400 == 0){
            console.log(anioBisiesto);
            contador++;
        }
        anioBisiesto++;
    }
}

anioBisiestos(2016);
anioBisiestos(2017);
anioBisiestos(2018);
anioBisiestos(2019);