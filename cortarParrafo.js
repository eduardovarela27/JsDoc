//cortar parrafo hasta el primer punto
/**
 * Extraer parte de una cadena con JavaScript
 * 
 * @author parzibyte
 * 
 * https://parzibyte.me/blog
 */
let cadena = "JavaScript es un lenguaje muy bueno";
// Buscamos el índice del espacio
// https://parzibyte.me/blog/2018/12/04/buscar-indice-posicion-elemento-arreglo-javascript/
let indice = cadena.indexOf(" ");
// Cortar desde 0 hasta la aparición del primer espacio
let extraida = cadena.substring(0, indice);
console.log("Extraída: ", extraida);
/*
Salida:
Extraída:  JavaScript
*/
