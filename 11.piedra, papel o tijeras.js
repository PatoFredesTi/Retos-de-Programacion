/*  
Crea un programa que calcule quien gana mas partidas al pieda, papel, tijera. 
El resultado puede ser: "Player 1", "Player 2", "Tie" 
La funcion recibe un listado que contiene pares, representando cada jugada.
El par puede contener combinaciones de "R", "P", o "S" (piedra, papel, tijera)
Ejemplo. Entrada [("R","S"), ("P","S"), ("S","R")] -> Salida "Player 1"
*/

function cachipun(jugadas){
    var player1 = 0;
    var player2 = 0;
    for(var i = 0; i < jugadas.length; i++){
        if(jugadas[i][0] == "R" && jugadas[i][1] == "S"){
            player1++;
        }else if(jugadas[i][0] == "P" && jugadas[i][1] == "R"){
            player1++;
        }else if(jugadas[i][0] == "S" && jugadas[i][1] == "P"){
            player1++;
        }else if(jugadas[i][0] == "S" && jugadas[i][1] == "R"){
            player2++;
        }else if(jugadas[i][0] == "R" && jugadas[i][1] == "P"){
            player2++;
        }else if(jugadas[i][0] == "P" && jugadas[i][1] == "S"){
            player2++;
        }
    }
    if(player1 > player2){
        return "Player 1";
    }else if(player2 > player1){
        return "Player 2";
    }else{
        return "Tie";
    }
}

console.log(cachipun([["R","S"], ["P","S"], ["S","R"]]));
console.log(cachipun([["R","S"], ["P","S"], ["S","R"], ["R","R"]]));
console.log(cachipun([["R","S"], ["P","S"], ["S","R"], ["R","R"], ["P","P"]]));
console.log(cachipun([["R","S"], ["P","S"], ["S","R"], ["R","R"], ["P","P"], ["S","S"]]));