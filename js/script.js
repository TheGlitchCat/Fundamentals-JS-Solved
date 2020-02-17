
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

// Imprimir un rectangulo dando alto y ancho

/*
var al = prompt('Altura');
var an = prompt('Ancho');

var cont = '';

for (var i = 0; i < al; i++){
    for(var j = 0; j < an; j++){
        cont += '*'
    }
    cont += '\n';
}
console.log(cont);
*/



// Potencias
/*
var num = Number(prompt('ingrese el numero a multiplicar'));
var mul = Number(prompt('cuantas veces'));
for (var i = 0; i < mul; i++){  
    num += num; 
}
*/

// Multiplicacion

/*
var num = Number(prompt('ingrese el numero a multiplicar'));
var mul = Number(prompt('cuantas veces'));
var res = 0;
for (var i = 0; i < mul; i++){
    res += num; 
}
console.log(res)
*/

// Escriba la función mcd(a, b) que entrege el máximo común divisor de los enteros a y b
/*
function mcd(a,b){
    if(a < b){
        for(var i = 0; i < b; i++){
            if(a % i == 0 && b % i == 0){
                console.log(i);
            }
        }
    } else {
        for(var i = 0; i < a; i++){
            if(a % i == 0 && b % i == 0){
                console.log(i);
            }
        }
    }
}

var a = Number(prompt('Ingrese a'));
var b = Number(prompt('Ingrese b'));
mcd(a,b);*/


// Palabra palindroma
/*
var inverso = '';
var normal = '12321';
for(var i = normal.length - 1; i >= 0; i--){
    inverso += normal[i]
}
console.log(normal)
console.log(inverso)
if(inverso == normal){
    console.log("Es palindromo")
}else{
    console.log("no es palindromo")
}
*/


// Adivinar numero de la maquina
var think = parseInt(Math.random() * (100 - 0))
var lives = 10;
while( lives > 0 ){
    var request = Number(prompt('Insert number'));

    if(request > think){
        console.log("less " + request);
    } else if(request < think){
        console.log('More ' + request);
    } else {
        console.log('Find It !!!! :D ' + request);
        break;
    }

    lives--;
}

if(lives == 0){
    console.log('Game Over, the numer is: ' + think);
}
