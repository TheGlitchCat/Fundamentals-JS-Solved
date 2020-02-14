
// Escriba un programa que pida al usuario que escriba su nombre, y lo salude llamándolo por su nombre.
/*
var nombre = prompt("Ingrese nombre");

console.log(`Hola ${nombre}`);
*/

// Escriba un programa que reciba como entrada el radio de un círculo y entregue como salida su perímetro y su área
/*
var radius = prompt('Ingrese Radio');
console.log(`Area: ${Math.PI * (radius**2)}`);
console.log(`Perimetro: ${Math.PI * 2 * radius}`);
*/

// Escriba un programa que calcule el promedio de 4 notas ingresadas por el usuario
/*
var nums = [];
var tries = 3;
for(var i = 0; i < tries ; i++){
    var input = prompt('Ingrese num');
    nums.push(Number(input));
}

var suma = 0;
for(var i = 0; i < nums.length; i++ ){
    suma += nums[i];
}

var prom = suma / Number(nums.length);
console.log(`Promedio: ${prom}`);
*/

// Escriba un programa que convierta de centímetros a pulgadas. Una pulgada es igual a 2.54 centímetros
/*
var input = prompt('Ingrese longitud');
console.log(`${input} cm = ${input / 2.54} in`);
*/

// Escriba un programa que pida al usuario una cadena de texto, y entregue dicha cadena en orden inverso
// BRUTE FORCE
/*
var str = prompt("Ingrese texto");
var arr = str.split("");
var inv = [];
var newStr = "";
for(var i = arr.length - 1; i >= 0; i--){   
    inv.push(arr[i]);
}
for(var i = 0 ; i < inv.length; i++){
    newStr += inv[i];
}
console.log(newStr);
*/
// Elegante
/*
var str = prompt("Ingrese texto"); // String = Arreglo de letras
var newStr = "";
for(var i = str.length - 1; i >= 0; i--){   // Recorrido invertido
    console.log(newStr);
    newStr += str[i];
}
console.log(newStr);
*/

//Escriba un programa que reciba como entrada las longitudes de los dos catetos a y b de un triángulo rectángulo, y que entregue como salida el largo de la hipotenusa c del triangulo, dado por el teorema de Pitágoras
/*
var c_a = prompt('Gateto a');
var c_b = prompt('Gateto b');
console.log(`Hipotenusa: ${Math.sqrt((c_a**2) + (c_b**2))}`); 
*/

/*
Cuando la Tierra completa una órbita alrededor del Sol, no han transcurrido exactamente 365 rotaciones sobre sí misma, sino un poco más. Más precisamente, la diferencia es de más o menos un cuarto de día.

Para evitar que las estaciones se desfasen con el calendario, el calendario juliano introdujo la regla de introducir un día adicional en los años divisibles por 4 (llamados bisiestos), para tomar en consideración los cuatro cuartos de día acumulados.

Sin embargo, bajo esta regla sigue habiendo un desfase, que es de aproximadamente 3/400 de día.

Para corregir este desfase, en el año 1582 el papa Gregorio XIII introdujo un nuevo calendario, en el que el último año de cada siglo dejaba de ser bisiesto, a no ser que fuera divisible por 400.

Escriba un programa que indique si un año es bisiesto o no, teniendo en cuenta cuál era el calendario vigente en ese año
*/
/*
var bis = Number(prompt("Ingrese año"));

if ( bis % 4 == 0 || (bis % 100 == 0 && bis % 400) ){
    console.log("Es bisiesto :D");
} else {
    console.log("no es bisiesto :c");
}
*/




