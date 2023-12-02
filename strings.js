

let nombreJugador = "Leonel Messi";
let tipoDeporte = 'Fútbol';

console.log(nombreJugador, tipoDeporte);
console.log("Número de letras:", nombreJugador.length);
console.log("Encontrar alguna palabra:", nombreJugador.includes("Messi"));
console.log("Convertir a mayúsculas:", nombreJugador.toUpperCase());
console.log("Convertir a minúsculas:", nombreJugador.toLowerCase());
console.log("Quitar espacios adelante y atrás:", nombreJugador.trim());
console.log("Reemplazar una palabra:", nombreJugador.replace('Messi', 'Messi-Rider'));
console.log("Cortar un texto:", nombreJugador.slice(1, 6));
console.log("Cortar un texto:", nombreJugador.substring(1, 6));
console.log("Cortar un texto:", nombreJugador.charAt(1));
console.log("Repetir un texto:", nombreJugador.repeat(2));
console.log("Dividir un texto:", nombreJugador.split(" "));

'use strict';

const name = "Martin";
const lastName = "Jimenez";
const city = "Quito / Valle de los chillos";
const age = 19;
const active = false;

console.log(`${name} - ${lastName} - ${city}`);
console.log(`${name} - ${lastName} - ${city} - ${active ? age : 'No se encuentra activo'}`);
