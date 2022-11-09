/* 
Crea una funcion que evalue si un/a atleta ha superdado correctamente una carrera de obstaculos
La funcion recibira dos parametros 
- Un array que solo puede contener String con las palabras "run" o "jump"
- Un string que representa la pista y solo puede contener "_" (suelo) o "|" (valla)
La funcion imprmira como ha finalizado la carrera:
- Si el/la atleta hace "run" en "_" y "jump" en "|" sera correcto y no variara el simbolo de esa parte de la pista
- Si hace "jump" en "_", se variara la pista por "x"
- Si hace "run" en "|", se variara la pista por "/"
La funcion retornara un Boolean que indique si ha superado la carrera.
Para ello tiene que realizar la opcion correcta en cada tramo de la pista.
*/

function carreraDeObstaculos(accion, pista){
    var pistaArray = pista.split("");
    var resultado = true;
    for(var i = 0; i < accion.length; i++){
        if(accion[i] == "run" && pistaArray[i] == "_"){
            pistaArray[i] = "_";
        }else if(accion[i] == "jump" && pistaArray[i] == "_"){
            pistaArray[i] = "x";
            resultado = false;
        }else if(accion[i] == "run" && pistaArray[i] == "|"){
            pistaArray[i] = "/";
            resultado = false;
        }else if(accion[i] == "jump" && pistaArray[i] == "|"){
            pistaArray[i] = "|";
        }
    }
    console.log(pistaArray.join(""));
    return resultado;
}

console.log(carreraDeObstaculos(["run", "jump", "run", "jump", "run", "jump", "run", "jump", "run", "jump"]));
console.log(carreraDeObstaculos(["run", "run", "run", "run", "run", "run", "run", "run", "run", "run"]));
console.log(carreraDeObstaculos(["jump", "jump", "jump", "jump", "jump", "jump", "jump", "jump", "jump", "jump"]));
console.log(carreraDeObstaculos(["run", "jump", "run", "jump", "run", "jump", "run", "jump", "run", "jump"]));

