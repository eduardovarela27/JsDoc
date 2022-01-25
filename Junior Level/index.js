//variables y tipos de datos
// string; number; boolean; null; undefined
let string = "esto es una cadena";
var number = 9;
const boolean = true;
let numero1, numero2, numero3;

// prompt
let nombre = prompt('decime tu nombre');
console.log(nombre);
alert(`hola ${nombre}`);

// operadores
let n = 10;
n **= 2; // 10 elevado al cuadrado
n **= 3; //10 elevado al cubo

//condicional ternario
let respuesta = numero >= 10 ? 'verdadero' : 'falso';

//concatencacion
frase1 = "Eduardo";
frase2 = "como estas?";
// con + 
//con concat (solo para string)
// con ,
// con ``

//operadores de comparacion
// === ==! compara si son identicos; tanto el dato , como el tipo de dato
// == =! compara igualdad; si el tipo de dato o el dato es igual, regresara true. Con eso le basta
let a = 2;
let b = 3;
console.log(a === b );//false
console.log(a == b); //true

//camel case
/*el principio va en minuscula, pero cuando va una palabra nueva debe comenzar
con mayuscula
ejemplo: holaComova, getElementById, etc. js trabaja con camel case */
