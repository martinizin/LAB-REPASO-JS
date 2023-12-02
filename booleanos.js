"use strict";
// Es importante reconocer el tipo de valor asignado
const numeroAsistentes = "20";
const numeroBoletos = 20;
console.log(numeroBoletos, numeroAsistentes);
console.log(typeof numeroBoletos, typeof numeroAsistentes);
console.log("suma:", numeroBoletos + 20);
console.log("resta:", numeroBoletos - 20);
console.log("multiplicación:", numeroBoletos * 20);
console.log("división:", numeroBoletos / 20);
console.log("módulo:", numeroBoletos % 20);
// Importante el manejo de operadores de incremento y decremento
let numeroPuntosActual = 20;
console.log(++numeroPuntosActual);
console.log(numeroPuntosActual++);
let numeroVidasActual = 20;
console.log(--numeroVidasActual);
console.log(numeroVidasActual--);

"use strict";
// operadores de asignación
let saldoTarjetaUsuario = 500;
let saldoTarjeta = 1000;
let estadoCuenta;
let emailConfirmado = null;
// operadores de asignación de adición
saldoTarjetaUsuario += 100;
console.log(saldoTarjetaUsuario);
// operadores de comparación
saldoTarjetaUsuario = "1000";
console.log(saldoTarjeta == saldoTarjetaUsuario);
// evalua tipo de dato y contenido
console.log(saldoTarjeta === saldoTarjetaUsuario);
console.log(estadoCuenta === emailConfirmado);
// operadores aritméticos
console.log(saldoTarjeta + Number.parseInt(saldoTarjetaUsuario));
// operadores lógicos
console.log(saldoTarjeta != saldoTarjetaUsuario);
// evalua tipo de dato y contenido
console.log(saldoTarjeta !== Number.parseInt(saldoTarjetaUsuario));




// "use strict";
// let saldoTarjetaUsuario = 500;
// let saldoTarjeta = 1000;
// const respuesta =
//     saldoTarjeta <= saldoTarjetaUsuario ? "Pagar" : "Seguir consumiendo";
// console.log(respuesta);