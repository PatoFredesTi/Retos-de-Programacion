/*
Crear una unica funcion que sea capaz de calcular y retornar el area de un poligono.
La funcion recibira por parametro solo un poligono a la vez
Los poligonos soportados seran Triagunlos, Cuadrados y Rectangulos
imrpme el calculo del area de un poligono de cada tipo
*/ 

function areaPoligono(poligono){
    var area = 0;
    if(poligono.tipo == "Triangulo"){
        area = (poligono.base * poligono.altura) / 2;
    }else if(poligono.tipo == "Cuadrado"){
        area = poligono.lado * poligono.lado;
    }else if(poligono.tipo == "Rectangulo"){
        area = poligono.base * poligono.altura;
    }
    return area;
}

var triangulo = {
    tipo: "Triangulo",
    base: 10,
    altura: 5
}

var cuadrado = {
    tipo: "Cuadrado",
    lado: 10
}

var rectangulo = {
    tipo: "Rectangulo",
    base: 10,
    altura: 5
}

console.log("El area del triangulo es: " + areaPoligono(triangulo));
console.log("El area del cuadrado es: " + areaPoligono(cuadrado));
console.log("El area del rectangulo es: " + areaPoligono(rectangulo));

