"use strict";
/*const listaDeVideojuegos = [];
// utilizando el condicional clásico
if (listaDeVideojuegos.length === 0) {
    console.log("Agregar videojuegos");
}
// utilizando operador ternario
listaDeVideojuegos.length === 0 ? console.log("Agregar videojuegos") : "";




"use strict";
const listaDeVideojuegos = ["Super Mario", "The Legend of Zelda", "Fortnite", "Minecraft"];
// utilizando el condicional clásico
if (listaDeVideojuegos.length !== 0) {
    console.log("Proceder a la compra de los videojuegos");
} else {
    console.log("Agregar videojuegos");
}
// utilizando operador ternario
const accion = listaDeVideojuegos.length !== 0
    ? "Proceder a la compra de los videojuegos"
    : "Agregar videojuegos";
console.log(accion);




'use strict'
const listaDeVideojuegos = ['Super Mario', 'The Legend of Zelda', 'Fortnite', 'Minecraft'];
// utilizando el condicional clásico
if (listaDeVideojuegos.length >= 4) {
    console.log("Descuento del 20%");
} else if (listaDeVideojuegos.length >= 5) {
    console.log("Descuento del 40%");
} else if (listaDeVideojuegos.length >= 8) {
    console.log("Descuento del 70%");
} else {
    console.log("No existe descuento");
}
// utilizando operador ternario
listaDeVideojuegos.length >= 4 ? console.log("Descuento del 20%") : listaDeVideojuegos.length >= 5 ? console.log("Descuento del 40%") : listaDeVideojuegos.length >= 8 ? console.log("Descuento del 70%") : console.log("No existe descuento")




// 'use strict'
// const listaDeVideojuegos = ['Super Mario', 'The Legend of Zelda', 'Fortnite', 'Minecraft'];
// // utilizando el condicional clásico
// if (listaDeVideojuegos.length >= 4) {
//     console.log("Descuento del 20%");
// } else if (listaDeVideojuegos.length >= 5) {
//     console.log("Descuento del 40%");
// } else if (listaDeVideojuegos.length >= 8) {
//     console.log("Descuento del 70%");
// } else {
//     console.log("No existe descuento");
// }

// // utilizando operador ternario
// listaDeVideojuegos.length >= 4 ? console.log("Descuento del 20%") : listaDeVideojuegos.length >= 5 ?
 console.log("Descuento del 40%") : listaDeVideojuegos.length >= 8 ?
  console.log("Descuento del 70%") : console.log("No existe descuento")*/



'use strict'
const actividadAlexa = 2
switch (actividadAlexa) {
    case 1:
        console.log("Abrir netflix");
    break;
    case 2:
        console.log("Reproducir Spotify");
    break;
    case 3:
        console.log("Prender luces");
    break;
    default:
        console.log(`No existe tarea para la actividad ${actividadSiri}`);
    break;
}
